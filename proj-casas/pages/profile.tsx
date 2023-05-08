import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { HouseData } from '@/typings'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
const Profile = () => {
    const { data: session } = useSession();
    const key = session?.user?.email
    const userBoughtHouse: HouseData = JSON.parse(localStorage.getItem(`user_email_${key}_data`)!);
    return (
        <>
            <Header />
            <section className='h-screen w-full mx-auto flex justify-center items-center pt-16 pb-2 font-roboto '>
                <div className='w-5/6 flex flex-col h-full bg-white shadow-sm border text-black'>
                    <div className='flex flex-col lg:flex-row w-full h-[50px] ' >
                        <ul role="tablist" aria-label='Tabs' className='flex flex-row items-center justify-between w-full px-4 text-gray-500 text-sm border-b'>
                            <button type="button" className='hover:text-primaryGreen hs-tab-active:text-primaryGreen' id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                Minha Conta
                            </button>
                            <button type="button" className='hover:text-primaryGreen hs-tab-active:text-primaryGreen' id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                Meus pedidos de aluguel
                            </button>
                            <button type="button" className='hover:text-primaryGreen hs-tab-active:text-primaryGreen' id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                                Meus pedidos de compra
                            </button>
                        </ul>
                    </div>
                    <div className="p-4 h-full">
                        <div className='flex flex-col justify-between h-full' id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                            <div className='text-center capitalize font-oswald font-semibold text-4xl w-full'>
                                <div className='flex flex-col-reverse gap-y-4 lg:flex-row items-center w-full text-center'>
                                    <p className='md:flex-1'>Olá, {session && session?.user?.name}!</p>
                                    {session && session.user?.image && (
                                        <img alt='Perfill' src={session.user.image} className='rounded-full object-cover h-28 w-28' />
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
                                <button onClick={() => signOut()} className='w-2/5 bg-primaryPurple text-white hover:bg-primaryPurple/90 px-4 py-2 rounded-sm tracking-wide'>Sign Out</button>
                            </div>
                        </div>
                        <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                            <div className='w-full flex flex-col border bg-neutral-100 h-[160px]'>
                                <div className='flex flex-row justify-between items-center p-2'>
                                    <Image src={userBoughtHouse.image} alt="Casa" className='h-full max-w-[140px] ' />
                                </div>
                            </div>
                        </div>
                        <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
                            <p className="text-gray-500 dark:text-gray-400">
                                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile