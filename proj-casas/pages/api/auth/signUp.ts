import { connectToMongo } from "@/lib/mongodb";
import User from "@/models/user";
import { IUser } from "@/typings";
import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToMongo();
        if (req.method === "POST") {
            if (!req.body) {
                return res.status(400).json({ error: "Preencha os campos. " });
            };

            const { email, name, password } = req.body;
            const userExists = await User.findOne<IUser>({ email });

            if (userExists) {
                return res.status(409).json({ error: "Email já está em uso." });
            } else {
                if (password && password.length < 4) {
                    return res.status(409).json({ error: "Senha deve conter 4 caractéres ou mais. " });
                };
                const hashedPassword = await hash(password, 12);
                const newUser = new User({
                    email,
                    name,
                    password: hashedPassword,
                });
                const savedUser = await newUser.save();
                const user = {
                    id: savedUser._id,
                    email: savedUser.email,
                    name: savedUser.name,
                };
                return res.status(201).json({ success: true, user });
            };
        } else {
            res.status(405).json({ error: "Método não permitido. " })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Falha interna no servidor.' });
    }
};

export default handler