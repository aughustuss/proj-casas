import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { UserForm } from '@/typings'
import { Button, InputAdornment, TextField, ThemeProvider, createTheme, styled, Snackbar, Alert } from '@mui/material'
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { BsFillKeyFill } from 'react-icons/bs'
import { loginUser } from '@/helpers'


export const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            'borderColor': '#6d28d9',
        },
        '&:hover fieldset': {
            'borderColor': '#6d28d9'
        },
        '& input': {
            'color': 'rgb(109, 109, 109) !important'
        },
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
    const [error, setError] = useState<string>('');
    const [snack, setSnack] = useState<boolean>(false);
    const router = useRouter();
    const { register, formState: { errors }, reset, handleSubmit } = useForm<UserForm>();

    const onSubmit: SubmitHandler<UserForm> = async (data) => {
        setSubmitted(true);
        try {
            const res = await axios.post("http://localhost:3000/api/auth/signUp", data);
            if (res.status === 201) {
                setSubmitted(false);
                setSnack(true);
                reset();
                setError("");
            };
            if(res.data?.success){
                const loginRes = await loginUser({
                    email: data.email,
                    password: data.password,
                });
                if(loginRes && !loginRes.ok){
                    setError(loginRes.error || '');
                } else {
                    router.push('/');
                }
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const errMsg = error.response?.data?.error;
                setSubmitted(false);
                setError(errMsg);
            }
        }
    }

    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <main className='h-screen w-full flex justify-center items-center'>
                    <div className='w-full sm:w-4/6 md:w-1/2 lg:w-1/4 h-fit rounded-md shadow-md bg-white flex justify-center'>
                        <div className='w-5/6 h-full flex flex-col items-center gap-y-4 py-4'>
                            <h1 className='font-oswald font-semibold text-3xl text-primaryPurple'>Crie sua conta</h1>
                            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} action="" className='w-full h-full flex flex-col justify-between items-center gap-y-4'>
                                <div className='w-full h-full flex flex-col gap-y-4'>
                                    <CustomTextField
                                        label='Nome'
                                        type='text'
                                        {...register("name", {
                                            required: true,
                                            minLength: 8,
                                        })}
                                        helperText={errors.name && (errors.name.type === 'required' ? 'Digite o nome.' : 'Deve ter no mínimo 8 caractéres.')}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start'>
                                                    <FaUserCircle />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <CustomTextField
                                        label='Email'
                                        type='email'
                                        {...register("email", {
                                            required: true,
                                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        })}
                                        helperText={errors.email && (errors.email.type === 'required' ? 'Digite o email. ' : 'Email inválido. ')}
                                        InputProps={
                                            {
                                                startAdornment: (
                                                    <InputAdornment position='start'>
                                                        <MdEmail />
                                                    </InputAdornment>
                                                )
                                            }
                                        }
                                    />
                                    <CustomTextField
                                        label='Senha'
                                        type='password'
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                        })}
                                        helperText={errors.password && (errors.password.type === 'required' ? 'Digite sua senha. ' : 'Deve ter no mínimo 6 caractéres.')}
                                        InputProps={
                                            {
                                                startAdornment: (
                                                    <InputAdornment position='start'>
                                                        <BsFillKeyFill />
                                                    </InputAdornment>
                                                )
                                            }
                                        }
                                    />
                                </div>
                                {error && error.length > 1 && (
                                    <p className='text-[14px] self-start text-red-600 '>
                                        {error}
                                    </p>
                                )}
                                <Button disabled={submitted} className='bg-primaryPurple text-white hover:bg-primaryPurple/90 ' type='submit' fullWidth>{!submitted ? 'Criar Conta' : <div className='flex flex-row items-center gap-x-2'>Enviando... <ImSpinner2 className=' animate-spin' size={18} /> </div>}</Button>
                            </form>
                            <p className='text-xs'>Já possui uma conta? <Link className='text-primaryPurple' href='Signin'>Faça o Login!</Link></p>
                        </div>
                    </div>
                    <Snackbar open={snack} autoHideDuration={5000} onClose={() => setSnack(false)}>
                        <Alert severity='success' onClose={() => setSnack(false)}>Sua conta foi criada com sucesso!</Alert>
                    </Snackbar>
                </main>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default Signup