import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { UserForm } from '@/typings'
import { InputAdornment, TextField, ThemeProvider, createTheme, styled, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { BsFillKeyFill } from 'react-icons/bs'

export const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            'borderColor': '#007aff',
        },
        '&:hover fieldset': {
            'borderColor': '#007aff'
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
                main: '#007aff',
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
        setTimeout(() => {
            setSubmitted(false);
            setSnack(true);
            router.push('/');
        }, 3000)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <main className='h-screen w-full flex justify-center items-center'>
                    <div className='w-5/6 sm:w-4/6 md:w-1/2 lg:w-1/3 xl:w-1/4 h-fit bg-neutral-100 flex justify-center'>
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
                                <button disabled={submitted} className='bg-quartiary text-quinary hover:bg-primary hover:text-white hover:scale-105 transition duration-200 w-full p-2 rounded-sm font-semibold' type='submit'>{!submitted ? 'Criar Conta' : <div className='flex flex-row items-center gap-x-2'>Enviando... <ImSpinner2 className=' animate-spin' size={18} /> </div>}</button>
                            </form>
                            <p className='text-xs'>Já possui uma conta? <Link className='text-quinary underline' href='Signin'>Faça o Login!</Link></p>
                        </div>
                    </div>
                    <Snackbar open={snack} autoHideDuration={5000} onClose={() => setSnack(false)}>
                        <Alert severity='success' onClose={() => setSnack(false)}>Sua conta foi criada com sucesso!</Alert>
                    </Snackbar>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Signup