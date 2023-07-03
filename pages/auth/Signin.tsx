import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { UserForm } from '@/typings'
import { InputAdornment, TextField, ThemeProvider, createTheme, styled, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { BsFillKeyFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai'

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
const Signin = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#007aff',
      }
    }
  });
  const { register, formState: { errors, isValid, isValidating }, reset, handleSubmit } = useForm<UserForm>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [snack, setSnack] = useState<boolean>(false);
  const router = useRouter();


  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: "http://localhost:3000" })
  };
  const handleGitHubSignIn = () => {
    signIn('github', { callbackUrl: "http://localhost:3000" })
  };

  const onSubmit: SubmitHandler<UserForm> = async (data) => {
    setSubmitted(true);
    reset();
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
          <div className='w-5/6 sm:w-4/6 md:w-1/2 lg:w-1/3 xl:w-1/4 h-fit rounded-md bg-neutral-100 flex justify-center'>
            <div className='w-5/6 h-full flex flex-col items-center gap-y-4 py-4'>
              <h1 className='font-oswald font-semibold text-3xl text-primaryPurple'>Faça seu Login</h1>
              <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} action="" className='w-full h-full flex flex-col justify-between items-center gap-y-4'>
                {!isValidating && !isValid && (
                  <p className='text-red-600 text-xs text-left w-full '>Preencha todos os campos corretamente. </p>
                )}
                <div className='w-full h-full flex flex-col gap-y-4'>
                  <CustomTextField
                    label='Email'
                    type='email'
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
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
                  <p className='text-red-600 text-xs text-left w-full '>{errors.email && (errors.email.type === 'required' ? 'Preencha o e-mail' : 'E-mail inválido')}</p>
                  <CustomTextField
                    label='Senha'
                    type='password'
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
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
                  <p className='text-red-600 text-xs text-left w-full '>{errors.password && (errors.password.type === 'required' ? 'Preencha a senha' : 'Mínimo de 6 caractéres')}</p>
                </div>
                <button disabled={submitted} className='bg-quartiary flex flex-row items-center justify-center text-quinary hover:bg-primary hover:text-white hover:scale-105 transition duration-200 w-full p-2 rounded-sm font-semibold' type='submit' >{!submitted ? 'Entrar' : <div className='flex flex-row items-center gap-x-2'>Entrando... <ImSpinner2 className=' animate-spin' size={18} /> </div>}</button>
                <div className='flex flex-col w-full justify-center items-center gap-y-2'>
                  <p className='text-center w-full text-xs text-gray'>ou</p>
                  <button onClick={handleGoogleSignIn} className='w-full normal-case flex flex-row items-center gap-x-4 border border-slate-200 bg-white text-gray hover:shadow-md p-2 rounded-sm justify-center'>
                    <FcGoogle size={32} /> Entre com o Google
                  </button>
                  <button onClick={handleGitHubSignIn} className='w-full normal-case flex flex-row items-center gap-x-4 border border-slate-200 bg-white text-gray hover:shadow-md p-2 rounded-sm justify-center' >
                    <AiFillGithub size={32} /> Entre com o GitHub
                  </button>
                </div>
              </form>
              <p className='text-xs'>Ainda não possui uma conta? <Link className='text-quinary underline' href='Signup'>Crie uma!</Link></p>
            </div>
          </div>
          <Snackbar open={snack} autoHideDuration={5000} onClose={() => setSnack(false)}>
            <Alert severity='success' onClose={() => setSnack(false)}>Login feito com sucesso!</Alert>
          </Snackbar>
        </main>
      </ThemeProvider>
    </>
  )
}

export default Signin