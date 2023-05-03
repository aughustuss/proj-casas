import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@mui/material'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
const Profile = () => {
    const { data: session } = useSession();
    return (
        <>
            <Header />
            <main className='h-screen w-full md:w-5/6 mx-auto flex justify-center items-center py-16 font-roboto'>
                <div className='w-5/6 h-auto bg-white shadow-sm border text-black p-4'>
                    <div className='w-full h-full flex flex-col gap-y-4 justify-between'>
                        <div className='text-center capitalize font-oswald font-semibold text-4xl w-full'>
                            <div className='flex flex-col-reverse gap-y-4 lg:flex-row items-center w-full text-center'>
                                <p className='md:flex-1'>Olá, {session && session?.user?.name}!</p>
                                {session && session.user?.image && (
                                    <img alt='Perfil' src={session.user.image} className='rounded-full object-cover h-28 w-28' />
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-y-8'>
                            <p className='text-2xl font-semibold font-oswald text-center'>Suas informações pessoais: </p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700 text-sm'>
                                <p className='p-2 bg-neutral-200 border rounded-sm'>Email: {session && session?.user?.email}</p>
                                <p className='p-2 bg-neutral-200 border rounded-sm'>Nome registrado: {session && session?.user?.name}</p>
                                <p className='p-2 bg-neutral-200 border rounded-sm col-span-1 lg:col-span-2'>Sessão expira em: {session && session.expires ? new Date(session?.expires).toLocaleDateString() : ''} </p>
                            </div>
                        </div>
                        <div className='w-full justify-center flex flex-row'>
                            <Button onClick={() => signOut()} className='w-2/5 bg-primaryPurple text-white hover:bg-primaryPurple/90'>Sign Out</Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Profile