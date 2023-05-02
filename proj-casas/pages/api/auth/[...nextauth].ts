import { connectToMongo } from "@/lib/mongodb";
import User from "@/models/user";
import { IUser } from "@/typings";
import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type:"password"},
            },
            async authorize(credentials){
                await connectToMongo().catch(err => {throw new Error(err)});
                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password");

                if(!user){
                    throw new Error("Email ou senha inválidos.");
                };

                const isPassword = await compare(credentials!.password, user.password);

                if(!isPassword){
                    throw new Error("Senha inválida. ");
                }
                return user
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],

    pages: {
        signIn: '/auth/Signin'
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({token, user}) => {
            user && (token.user = user);
            return token;
        },
        session: async ({session, token}) => {
            const user = token.user as IUser;
            session.user = user;
            return session;
        }
    }
}
export default NextAuth(options);