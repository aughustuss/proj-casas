import Header from '@/components/Header';
import { ContactFormData, HouseData } from '@/typings'
import { housesData } from '@/utils/data';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { TextField, styled, createTheme, ThemeProvider, Snackbar, Alert } from '@mui/material';
import Footer from '@/components/Footer';
import { AiFillMobile } from 'react-icons/ai';
import { collectAppConfig } from 'next/dist/build/utils';
import { CompletionInfoFlags } from 'typescript';
import { setMaxIdleHTTPParsers } from 'http';
interface HouseProps {
    house: HouseData;
    houses: HouseData[];
};
const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            'borderColor': '#01D28E',
        },
        '&:hover fieldset': {
            'borderColor': '#01D28E'
        },
        '& input': {
            'color': 'rgb(163, 163, 163) !important'
        },
        '& textarea': {
            'color': 'rgb(163, 163, 163)'
        }
    },
    '& MuiContainedButton-root': {

    }
});

const HouseDetails = ({ house }: HouseProps) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#01D28E'
            },
        },
    })
    const { register, formState: { errors }, handleSubmit, getValues } = useForm<ContactFormData>();
    const { data: session } = useSession();
    const router = useRouter();

    const [contactOwner, setContactOwner] = useState<boolean>(false);
    const [buyOption, setBuyOption] = useState<boolean>(false)
    const [buyBar, setBuyBar] = useState<boolean>(false);
    const [rentBar, setRentBar] = useState<boolean>(false);
    const [rentDaysError, setRentDaysError] = useState<boolean>(false);
    const [boughtHouseAlreadyExists, setBoughtHouseAlreadyExists] = useState<boolean>(false);
    const [rentHouseAlreadyExists, setRentHouseAlreadyExists] = useState<boolean>(false);
    const [emptyFieldsError, setEmptyFieldsError] = useState<boolean>(false)

    const [rentHouses, setRentHouses] = useState<HouseData[]>([]);
    const [boughtHouses, setBoughtHouses] = useState<HouseData[]>([]);
    const rentDaysPrice = parseFloat(house.price);
    const key = session?.user?.email;
    const RentOpts = [
        {
            days: '1',
            label: 'dia',
            price: rentDaysPrice,
        },
        {
            days: '2',
            label: 'dias',
            price: rentDaysPrice,
        },
        {
            days: '3',
            label: 'dias',
            price: rentDaysPrice,
        },
        {
            days: '4',
            label: 'dias',
            price: rentDaysPrice,
        },
        {
            days: '5',
            label: 'dias',
            price: rentDaysPrice,
        },
        {
            days: '6',
            label: 'dias',
            price: rentDaysPrice,
        },
        {
            days: '7',
            label: 'dias',
            price: rentDaysPrice,
        }
    ];
    useEffect(() => {

        const userBoughtHouses = localStorage.getItem(`user_email_${key}_buy_data`);
        if (userBoughtHouses) {
            setBoughtHouses(JSON.parse(userBoughtHouses));
        }

        const userRentHouses = localStorage.getItem(`user_email_${key}_rent_data`);
        if (userRentHouses) {
            setRentHouses(JSON.parse(userRentHouses));
        }
    }, [key]);

    if (router.isFallback) {
        return <div>Carregando...</div>;
    }

    function handleBuyOption() {
        if (contactOwner) {
            const contactData = getValues();
            const emptyField = Object.values(contactData).some((field) => field === '');
            if (emptyField) {
                setEmptyFieldsError(true);
            } else {
                setEmptyFieldsError(false);
            }
        } else {
            confirmBuy();
        }

    }

    const confirmBuy = () => {
        const newHouse = { ...house };
        const rentHouseExists = rentHouses.some((h) => h.id === newHouse.id);
        const boughtHouseExists = boughtHouses.some((h) => h.id === newHouse.id);
        if (!rentHouseExists && !boughtHouseExists) {
            const newHouses = [...Object.values(boughtHouses), newHouse];
            localStorage.setItem(`user_email_${key}_buy_data`, JSON.stringify(newHouses));
            setBoughtHouseAlreadyExists(false);
            setBuyBar(true);
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } else {
            setBoughtHouseAlreadyExists(true);
        }
    };

    //aluguel

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        if (data.rentDays === "Selecione os dias para alugar") {
            setRentDaysError(true);
            return;
        };
        const newHouse = { ...house, data };
        const rentHouseExists = rentHouses.some((h) => h.id === newHouse.id);
        const boughtHouseExists = boughtHouses.some((h) => h.id === newHouse.id);
        if (!rentHouseExists && !boughtHouseExists) {
            const newHouses = [...Object.values(rentHouses), newHouse];
            localStorage.setItem(`user_email_${key}_rent_data`, JSON.stringify(newHouses));
            setRentHouseAlreadyExists(false);
            setRentBar(true);
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } else {
            setRentHouseAlreadyExists(true);
        }
    }
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <section className='w-5/6 mx-auto py-24 min-h-screen h-auto flex justify-center items-center font-roboto relative tracking-wide'>
                    <div className='w-full h-full flex flex-col'>
                        <div className='flex flex-col py-2 md:gap-y-0 lg:flex-row items-center w-full lg:justify-between gap-y-4 lg:gap-y-0'>
                            <p className='font-semibold text-xl w-full lg:w-auto'>{house.address}</p>
                            <p className='text-primaryGreen font-semibold w-full lg:w-auto text-xl flex flex-row gap-x-1 items-center'>R$ {house.price},00</p>
                            <div className='flex flex-row items-center justify-start w-full lg:w-auto text-white gap-x-2'>
                                <p className='bg-primaryPurple w-fit rounded-full px-2 lg:text-center'>{house.country}</p>
                                <p className='bg-primaryGreen w-fit rounded-full px-2 text-left lg:text-center '>{house.type}</p>
                                {house.rentable && (
                                    <p className='bg-primaryBlue w-fit rounded-full px-2 text-left lg:text-center '>Alugável</p>
                                )}
                            </div>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row md:gap-x-4 gap-y-4 xl:gap-y-0 h-full'>
                            <div className='flex flex-col gap-y-2'>

                                <div className='max-w-3xl'>
                                    <Image alt='Imagem da casa' src={house.imageLg} className='bg-cover' />
                                </div>

                                <div className='flex flex-row items-center gap-x-2 text-md font-semibold text-primaryPurple'>
                                    <p className='flex flex-row items-center gap-x-1'><BiBed />{house.bedrooms}</p>
                                    <p className='flex flex-row items-center gap-x-1'><BiBath />{house.bathrooms}</p>
                                    <p className='flex flex-row items-center gap-x-1'><BiArea />{house.surface}</p>
                                </div>

                                <details className='max-w-3xl text-gray-500 cursor-pointer'>
                                    <summary className=' before:content-none list-none [&::-webkit-details-marker]:hidden text-md lg:text-lg'>Descrição -</summary>
                                    <p className='text-sm p-2'>{house.description}</p>
                                </details>
                            </div>
                            {session ? (
                                <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/3 flex flex-col gap-y-4 justify-between border border-primaryGreen p-2 rounded-sm '>
                                    {!rentHouseAlreadyExists ? (
                                        <div>
                                            <div className='flex flex-col w-full justify-center items-center text-center gap-y-4 text-sm lg:text-md '>
                                                {house.rentable ? (
                                                    <div className='flex flex-col gap-y-4'>
                                                        <div className='text-gray-500'>
                                                            Esta propriedade pode ser alugada ou comprada inteiramente, selecione abaixo uma das opções e entre em contato com o proprietário em caso de dúvidas.
                                                        </div>
                                                        <p className='text-gray-500'>Se desejar alugar, selecione a quantidade de dias abaixo: </p>
                                                        <select {...register("rentDays", { required: buyOption })} name="rentDays" className='outline-none w-full text-center border border-primaryGreen p-2 rounded-sm text-primaryGreen'>
                                                            <option defaultValue='Selecione os dias para alugar' >Selecione os dias para alugar</option>
                                                            {RentOpts && RentOpts.map(({ days, label, price }) => {
                                                                return (
                                                                    <option value={days} key={days} >{days} {label} - R$ {price % 365 * parseInt(days)},00</option>
                                                                )
                                                            })}
                                                        </select>
                                                        <p className='w-full text-center text-gray-500 text-xs'>{rentDaysError && (<p>Selecione quantos dias.</p>)}</p>
                                                    </div>
                                                ) : (
                                                    <div className='text-gray-500'>
                                                        Esta propriedade não está disponível para aluguel. Mande uma mensagem para o proprietário em caso
                                                        de dúvidas ou se apresente caso queira comprar.
                                                    </div>
                                                )}

                                                {!contactOwner && (
                                                    <div className='w-full flex flex-col gap-y-4 justify-center items-center text-gray-500'>
                                                        <p >Deseja enviar uma mensagem para o proprietário?</p>
                                                        <div className='flex flex-row w-full items-center justify-evenly'>
                                                            <div className='flex flex-row gap-x-1'>
                                                                <input type="checkbox" onClick={() => setContactOwner(true)} />
                                                                <label >Sim</label>
                                                            </div>
                                                            <div className='flex flex-row gap-x-1'>
                                                                <input type="checkbox" value='Não mandar mensagem.' {...register("notSendMessage", { required: !contactOwner ? true : false })} />
                                                                <label >Não</label>
                                                            </div>
                                                        </div>
                                                        <p className='w-full text-center text-gray-500 text-xs'>{errors.notSendMessage && errors.notSendMessage.type === 'required' && 'Selecione uma das opções acima.'}</p>
                                                    </div>
                                                )}
                                            </div>
                                            {contactOwner && (
                                                <div className='border flex flex-col rounded-lg h-auto relative'>
                                                    <button onClick={() => setContactOwner(false)} className='bg-gray-300 hover:bg-gray-400 transition duration-200 rounded-sm absolute right-0 top-0 text-gray-500 m-1 px-2' title='Cancelar mensagem'>x</button>
                                                    <div className='flex flex-col lg:flex-row items-center gap-x-4 w-full p-8 '>
                                                        <Image width={90} height={90} alt='Locador' src={house.agent.image} className='object-cover border border-neutral-300 rounded-full p-1' />
                                                        <div className='flex flex-col w-full '>
                                                            <p className='text-[14px] text-center text-gray-500'>Proprietário(a)</p>
                                                            <p className='text-center font-semibold text-lg'>{house.agent.name}</p>
                                                        </div>
                                                    </div>

                                                    <div className='w-full h-full items-center flex flex-col justify-between gap-y-4 py-2'>
                                                        <div className='w-5/6 flex flex-col justify-center gap-y-4'>
                                                            <p className='text-red-500 text-sm'>{emptyFieldsError && ( <p>Preencha todos os campos.</p> )}</p>
                                                            <CustomTextField
                                                                label='Nome'
                                                                type='text'
                                                                {...register("name", {
                                                                    required: contactOwner,
                                                                    minLength: 10,
                                                                })}
                                                                helperText={errors.name && (errors.name?.type === 'required' ? 'Preencha o seu nome.' : 'Deve ter no mínimo 10 caractéres. ')}
                                                            />
                                                            <CustomTextField
                                                                label='Email'
                                                                type='email'
                                                                {...register("email", {
                                                                    required: contactOwner,
                                                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                                })}
                                                                helperText={errors.email && (errors.email.type === 'required' ? 'Preencha o seu e-mail.' : 'E-mail inválido. ')}
                                                            />
                                                            <CustomTextField
                                                                label='Telefone'
                                                                type='tel'
                                                                {...register("tel", {
                                                                    required: contactOwner,
                                                                    minLength: 11,
                                                                    maxLength: 11,
                                                                })}
                                                                helperText={errors.tel && (errors.tel.type === 'required' ? 'Preencha o seu telefone.' : 'Deve ter 11 caractéres. ')}
                                                            />
                                                            <CustomTextField
                                                                multiline
                                                                rows={6}
                                                                label='Mensagem'
                                                                {...register('msg', {
                                                                    required: contactOwner,
                                                                    maxLength: 2000
                                                                })}
                                                                helperText={errors.msg && (errors.msg.type === 'required' ? 'Escreva a sua mensagem. ' : 'Máximo de 2000 caractéres. ')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                    ) : (
                                        <div className='flex flex-col text-center items-center justify-center w-full h-[450px] text-sm text-gray-500'>
                                            <p>Esta casa já foi adicionada em seus aluguéis ou em suas compras. Favor selecionar outra.</p>
                                        </div>
                                    )}
                                    <div className='w-full flex flex-col gap-y-2'>
                                        <button type="button" onClick={handleBuyOption} disabled={boughtHouseAlreadyExists} className=' disabled:cursor-not-allowed disabled:bg-gray-400/40 disabled:text-gray-100 w-full bg-primaryGreen hover:bg-primaryGreen/80 transition duration-200 p-2 rounded-sm text-white'>Solicitar Compra</button>
                                        {house.rentable && (<button type='submit' disabled={rentHouseAlreadyExists} className='disabled:cursor-not-allowed disabled:bg-gray-400/40 disabled:text-gray-100 disabled:border-none w-full border border-primaryGreen transition duration-200 p-2 rounded-sm text-primaryGreen'>Solicitar Aluguel</button>)}
                                    </div>
                                </form>
                            ) : (
                                <div className='lg:w-1/3 h-auto w-full text-sm text-center text-gray-500 border flex flex-col justify-center'>
                                    <p className='flex flex-col xl:flex-row items-center w-full justify-center gap-x-1'>Faça o <Link href='/auth/Signin' className='underline'>{' '} Login</Link> para solicitar aluguel ou compra da casa.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {buyOption && (
                        <div className='absolute inset-0 bg-blurred w-full h-full text-gray-500 z-30'>
                            <div className='flex justify-center items-center w-full h-full'>
                                {!boughtHouseAlreadyExists ? (
                                    <div className='w-[300px] h-auto min-h-[450px] rounded-lg bg-white shadow-md shadow-gray-400 flex flex-col justify-between relative p-8 gap-y-4'>
                                        <div className='h-full w-full'>
                                            <button onClick={() => setBuyOption(false)} className='bg-gray-300 hover:bg-gray-400 transition duration-200 rounded-sm absolute right-0 top-0 text-gray-500 m-1 px-2' title='Cancelar mensagem'>x</button>
                                            <div className='flex flex-col w-full pt-6 gap-y-4'>
                                                <p className='text-2xl font-semibold border-b' >Resumo do pedido</p>
                                                <div className='flex flex-col w-full gap-y-4 text-sm'>
                                                    <p className='flex flex-row items-center gap-x-2' >Valor do imóvel: R$ {house.price},00</p>
                                                    <p >Proprietário: {house.agent.name}</p>
                                                    <p>Telefone para contato: {house.agent.phone}</p>
                                                    <p>Endereço: {house.address}, {house.country}</p>
                                                    <p>Tipo do imóvel: {house.type} </p>
                                                    <div className='flex flex-row items-center justify-between gap-x-4'>
                                                        <p>Quartos: {house.bedrooms}</p>
                                                        <p>Banheiros: {house.bathrooms}</p>
                                                    </div>
                                                    <p>Área: {house.surface}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row w-full gap-x-4'>
                                                <button onClick={confirmBuy} type="submit" className='w-full bg-primaryGreen p-2 rounded-sm text-white hover:bg-primaryGreen/80 transition duration-200'>Confirmar</button>
                                                <button onClick={() => setBuyOption(false)} className='w-full p-2 border border-primaryGreen rounded-sm text-primaryGreen'>Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-sm flex flex-col h-[200px] w-[300px] bg-white rounded-lg shadow-md shadow-gray-400 p-8 justify-between relative">
                                        <div>
                                            <button onClick={() => setBuyOption(false)} className='bg-gray-300 hover:bg-gray-400 transition duration-200 rounded-sm absolute right-0 top-0 text-gray-500 m-1 px-2' title='Cancelar mensagem'>x</button>
                                            <p>Esta casa já foi adicionada em seus aluguéis ou em suas compras. Favor selecionar outra.</p>
                                        </div>
                                        <div className='w-full text-center'>
                                            <button onClick={() => setBuyOption(false)} className='w-full p-2 rounded-sm bg-primaryGreen hover:bg-primaryGreen/80 transition duration-200 text-white'>Ok</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <Snackbar open={buyBar} autoHideDuration={6000} onClose={() => setBuyBar(false)}>
                        <Alert severity='success' onClose={() => setBuyBar(false)}>Seu pedido de compra foi realizado com sucesso. Logo receberá atualizações.</Alert>
                    </Snackbar>
                    <Snackbar open={rentBar} autoHideDuration={6000} onClose={() => setRentBar(false)}>
                        <Alert severity='success' onClose={() => setRentBar(false)}>Sua solicitação de aluguel foi realizada com sucesso. Acesse sua conta para acompanhar seu pedido.</Alert>
                    </Snackbar>
                </section>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default HouseDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = housesData.map((house) => ({
        params: {
            id: house.id.toString(),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const house = housesData.find((house) => house.id == Number(id));
    if (!house) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            house,
        }
    }
}