import Header from '@/components/Header';
import { ContactFormData, HouseData } from '@/typings'
import { housesData } from '@/utils/data';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiBed, BiBath, BiMoney, BiArea } from 'react-icons/bi'
import { TextField, styled, createTheme, ThemeProvider, Snackbar, Alert } from '@mui/material';
import Footer from '@/components/Footer';
interface HouseProps {
    house: HouseData;
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
    const { register, formState: { errors }, handleSubmit } = useForm<ContactFormData>();
    const { data: session } = useSession();
    const router = useRouter();
    const [contactOwner, setContactOwner] = useState<boolean>(false);
    const [buyOption, setBuyOption] = useState<boolean>(false)
    const [buyBar, setBuyBar] = useState<boolean>(false);
    const [rentBar, setRentBar] = useState<boolean>(false);
    const rentDaysPrice = parseFloat(house.price);
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
    if (router.isFallback) {
        return <div>Carregando...</div>
    };
    const confirmBuy = () => {
        setBuyBar(true);
        setTimeout(() => {
            router.push('/');
        }, 2000);
    };
    const confirmRent = () => {
        setRentBar(true);
        setTimeout(() => {
            router.push('/')
        }, 2000);
    }
    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        console.log(data);
        confirmRent();
    }
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <section className='w-5/6 mx-auto py-24 min-h-screen h-auto flex justify-center items-center font-roboto'>
                    <div className='w-full h-full flex flex-col'>
                        <div className='flex flex-col py-2 md:gap-y-0 lg:flex-row items-center w-full lg:justify-between'>
                            <p className='font-semibold text-xl w-full lg:w-auto'>{house.address}</p>
                            <div className='flex flex-row items-center justify-start w-full lg:w-auto text-white gap-x-2'>
                                <p className='bg-primaryPurple w-fit rounded-full px-2 lg:text-center'>{house.country}</p>
                                <p className='bg-primaryGreen w-fit rounded-full px-2 text-left lg:text-center '>{house.type}</p>
                                {house.rentable && (
                                    <p className='bg-primaryBlue w-fit rounded-full px-2 text-left lg:text-center '>Alugável</p>
                                )}
                            </div>
                            <p className='text-primaryGreen font-semibold w-full lg:w-auto text-xl flex flex-row gap-x-1 items-center'>R$ {house.price},00</p>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row md:gap-x-4 gap-y-4 xl:gap-y-0'>
                            <div className='flex flex-col gap-y-2'>

                                <div className='max-w-3xl'>
                                    <Image alt='Imagem da casa' src={house.imageLg} className='bg-cover' />
                                </div>

                                <div className='flex flex-row items-center gap-x-2 text-md font-semibold text-primaryPurple'>
                                    <p className='flex flex-row items-center gap-x-1'><BiBed />{house.bedrooms}</p>
                                    <p className='flex flex-row items-center gap-x-1'><BiBath />{house.bathrooms}</p>
                                    <p className='flex flex-row items-center gap-x-1'><BiArea />{house.surface}</p>
                                </div>

                                <div className='max-w-3xl text-gray-500'>
                                    {house.description}
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/3 flex flex-col gap-y-4 justify-between'>
                                <div>
                                    <div className='flex flex-col w-full justify-center gap-y-4'>
                                        <button type="submit" onClick={() => setBuyOption(true)} className='w-full bg-primaryGreen hover:bg-primaryGreen/80 transition duration-200 p-2 rounded-sm text-white'>Comprar</button>
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
                                            {session ? (
                                                <div className='w-full h-full items-center flex flex-col justify-between gap-y-4'>
                                                    <div className='w-5/6 flex flex-col justify-center gap-y-4'>
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
                                                    <div className='gap-y-2 w-5/6 flex flex-col gap-x-4 pb-4'>
                                                        <button type='button' className='w-full text-primaryGreen p-2 rounded-sm border border-primaryGreen'>Ligar</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='w-full text-sm text-center text-gray-500 sm:mt-24'>
                                                    Faça o <Link href='/auth/Signin' className='underline'>{' '} Login</Link> para entrar em contato com o proprietário(a).
                                                </div>
                                            )}
                                        </div>

                                    )}
                                </div>
                                <div>
                                    <button type='submit' className='w-full bg-primaryGreen hover:bg-primaryGreen/80 transition duration-200 p-2 rounded-sm text-white'>Alugar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {buyOption && (
                        <div className='absolute bg-blurred w-full h-full text-gray-500'>
                            <div className='flex justify-center items-center w-full h-full'>
                                <div className='w-96 h-auto min-h-48 bg-white border border-primaryGreen shadow-md flex flex-col justify-between relative p-4 gap-y-4'>
                                    <button onClick={() => setBuyOption(false)} className='bg-gray-300 hover:bg-gray-400 transition duration-200 rounded-sm absolute right-0 top-0 text-gray-500 m-1 px-2' title='Cancelar mensagem'>x</button>
                                    <div className='flex flex-col w-full pt-6 gap-y-4'>
                                        <p className='text-center text-2xl font-semibold border-b' >Resumo da compra</p>
                                        <div className='flex flex-col w-full gap-y-2 '>
                                            <p className='flex flex-row items-center gap-x-2' >Valor do imóvel: R$ {house.price},00</p>
                                            <p >Proprietário: {house.agent.name}</p>
                                            <p>Endereço: {house.address}, {house.country}</p>
                                            <p>Tipo do imóvel: {house.type} </p>
                                            <div className='flex flex-row items-center gap-x-4'>
                                                <p>Quartos: {house.bedrooms}</p>
                                                <p>Banheiros: {house.bathrooms}</p>
                                                <p>Área: {house.surface}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row w-full gap-x-4'>
                                        <button onClick={confirmBuy} type="submit" className='w-full bg-primaryGreen p-2 rounded-sm text-white hover:bg-primaryGreen/80 transition duration-200'>Confirmar</button>
                                        <button onClick={() => setBuyOption(false)} className='w-full p-2 border border-primaryGreen rounded-sm text-primaryGreen'>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Snackbar open={buyBar} autoHideDuration={6000} onClose={() => setBuyBar(false)}>
                        <Alert severity='success' onClose={() => setBuyBar(false)}>Sua compra foi realizada com sucesso.</Alert>
                    </Snackbar>
                    <Snackbar open={rentBar} autoHideDuration={6000} onClose={() => setRentBar(false)}>
                        <Alert severity='success' onClose={() => setRentBar(false)}>Seu aluguel foi realizado com sucesso.</Alert>
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