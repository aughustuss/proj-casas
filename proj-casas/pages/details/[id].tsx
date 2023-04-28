import Header from '@/components/Header';
import { HouseData } from '@/typings'
import { housesData } from '@/utils/data';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { BiBed, BiBath, BiMoney, BiArea } from 'react-icons/bi'
import { TextField, styled, createTheme, ThemeProvider, Button } from '@mui/material';
import { useForm } from 'react-hook-form'
interface HouseProps {
    house: HouseData;
};
const CustomButton = styled(Button)({
    '&.MuiButton-contained': {
        backgroundColor: '#30ba9f',
        '&:hover': {
            backgroundColor: '#30ba9f'
        }
    }
});
const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            'borderColor': '#30ba9f',
        },
        '&:hover fieldset': {
            'borderColor': '#30ba9f'
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
    const router = useRouter();
    if (router.isFallback) {
        return <div>Carregando...</div>
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: '#30ba9f'
            },
        },
    })
    const { register, formState: { errors }, trigger, reset } = useForm();
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        } else {
            reset();
        }
    }
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <section className='w-5/6 mx-auto py-24 min-h-screen h-auto flex justify-center items-center'>
                    <div className='w-full h-full flex flex-col'>

                        <div className='flex flex-col py-2 md:gap-y-0 lg:flex-row items-center w-full lg:justify-between'>
                            <p className='font-semibold text-xl w-full lg:w-auto'>{house.address}</p>
                            <div className='flex flex-row items-center justify-start w-full lg:w-auto text-white gap-x-2'>
                                <p className='bg-primaryGreen w-fit rounded-full px-2 lg:text-center'>{house.country}</p>
                                <p className='bg-primaryPurple w-fit rounded-full px-2 text-left lg:text-center'>{house.type}</p>
                            </div>
                            <p className='text-primaryPurple font-semibold w-full lg:w-auto text-xl flex flex-row gap-x-1 items-center'><BiMoney />{house.price}</p>
                        </div>

                        <div className='w-full flex flex-col lg:flex-row md:gap-x-4'>
                            <div className='flex flex-col gap-y-2'>

                                <div className='max-w-3xl'>
                                    <Image alt='Imagem da casa' src={house.imageLg} className='bg-cover' />
                                </div>

                                <div className='flex flex-row items-center gap-x-2 text-md font-semibold text-primaryPurple'>
                                    <p className='flex flex-row items-center gap-x-1'><BiBed />{house.bedrooms}</p>
                                    <p className='flex flex-row items-center gap-x-1'><BiBath />{house.bathrooms}</p>
                                    <p className='flex flex-row items-center gap-x-1'><BiArea />{house.surface}</p>
                                </div>

                                <div className='max-w-3xl'>
                                    {house.description}
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3 border flex flex-col rounded-lg'>
                                <div className='flex flex-row items-center gap-x-4 w-full p-8 '>
                                    <Image width={90} height={90} alt='Locador' src={house.agent.image} className='object-cover border border-neutral-300 rounded-full p-1' />
                                    <p className='text-center font-semibold text-lg'>{house.agent.name}</p>
                                </div>
                                <form onSubmit={onSubmit} className='w-full h-full items-center flex flex-col justify-between' action="">
                                    <div className='w-5/6 flex flex-col justify-center gap-y-4'>
                                        <CustomTextField
                                            label='Nome'
                                            type='text'
                                            {...register("name", {
                                                required: true,
                                                minLength: 10,
                                            })}
                                            helperText={errors.name && (errors.name?.type === 'required' ? 'Preencha o seu nome.' : 'Deve ter no mínimo 10 caractéres. ')}
                                        />
                                        <CustomTextField
                                            label='Email'
                                            type='email'
                                            {...register("email",{
                                                required: true,
                                                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            })}
                                            helperText={errors.email && (errors.email.type === 'required' ? 'Preencha o seu e-mail.' : 'E-mail inválido. ')}
                                        />
                                        <CustomTextField
                                            label='Telefone'
                                            type='tel'
                                            {...register("tel", {
                                                required: true,
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
                                                required: true,
                                                maxLength: 2000
                                            })}
                                            helperText={errors.msg && (errors.msg.type === 'required' ? 'Escreva a sua mensagem. ' : 'Máximo de 2000 caractéres. ')}
                                        />
                                    </div>
                                    <div className='gap-y-2 w-5/6 flex flex-col gap-x-4 pb-4'>
                                        <CustomButton type='submit' variant='contained' className='w-full' sx={{color: "#FFF"}}>Enviar mensagem</CustomButton>
                                        <Button type='button' variant='outlined' className='w-full'>Ligar</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </ThemeProvider>
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