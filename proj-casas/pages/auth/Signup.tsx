import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { UserForm } from '@/typings'
import { Button, TextField, ThemeProvider, createTheme, styled } from '@mui/material'
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner2 } from 'react-icons/im'
import { json } from 'stream/consumers'


export const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            'borderColor': '#6d28d9',
        },
        '&:hover fieldset': {
            'borderColor': '#6d28d9'
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
const Signup = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#6d28d9',
            }
        }
    });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const { register, formState: { errors }, reset, handleSubmit } = useForm<UserForm>();
    const onSubmit: SubmitHandler<UserForm> = async (data) => {
        setSubmitted(true);
        try {
            const res = await axios.post("http://localhost:3000/api/auth/signUp", data)
                .then(() => {
                    setSubmitted(false);
                    reset();
                }).catch((err) => {
                    console.log(err);
                });
        } catch (error: unknown) {
            if (error instanceof AxiosError){
                const errMsg = error.response?.data?.error;
            }
        }
    }

    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <main className='h-screen w-full flex justify-center items-center'>
                    <div className='w-full sm:w-4/6 md:w-1/2 lg:w-1/4 h-3/6 rounded-md shadow-md bg-white flex justify-center'>
                        <div className='w-5/6 h-full flex flex-col items-center gap-y-4 py-4'>
                            <h1 className='font-oswald font-semibold text-3xl text-primaryPurple'>Crie sua conta</h1>
                            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} action="" className='w-full h-full flex flex-col justify-between items-center'>
                                <div className='w-full h-full flex flex-col gap-y-4'>
                                    <CustomTextField
                                        label='Nome'
                                        type='text'
                                        {...register("username", {
                                            required: true,
                                            minLength: 8,
                                        })}
                                        helperText={errors.username && (errors.username.type === 'required' ? 'Digite o nome.' : 'Deve ter no mínimo 8 caractéres.')}
                                    />
                                    <CustomTextField
                                        label='Email'
                                        type='email'
                                        {...register("email", {
                                            required: true,
                                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        })}
                                        helperText={errors.email && (errors.email.type === 'required' ? 'Digite o email. ' : 'Email inválido. ')}
                                    />
                                    <CustomTextField
                                        label='Senha'
                                        type='password'
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                        })}
                                        helperText={errors.password && (errors.password.type === 'required' ? 'Digite sua senha. ' : 'Deve ter no mínimo 6 caractéres.')}
                                    />
                                </div>
                                <Button className='bg-primaryPurple text-white hover:bg-primaryPurple/90 ' type='submit' fullWidth>{!submitted ? 'Criar Conta' : <div className='flex flex-row items-center gap-x-2'>Enviando... <ImSpinner2 className=' animate-spin' size={18} /> </div>}</Button>
                            </form>
                        </div>
                    </div>
                </main>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default Signup