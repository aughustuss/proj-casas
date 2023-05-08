import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState, useEffect } from 'react'
import { ContactFormData, HouseData } from '@/typings'
import { useSession, signOut } from 'next-auth/react'
import { ImSpinner2 } from 'react-icons/im'
import Image from 'next/image'
const Profile = () => {
    const [rentHouses, setRentHouses] = useState<HouseData[]>([]);
    const [boughtHouses, setBoughtHouses] = useState<HouseData[]>([]);
    const [loadingBoughtHouse, setLoadingBoughtHouse] = useState<boolean>(false);
    const { data: session } = useSession();
    const key = session?.user?.email

    useEffect(() => {
        const userBoughtHouses = localStorage.getItem(`user_email_${key}_buy_data`);
        if (userBoughtHouses) {
            setBoughtHouses(JSON.parse(userBoughtHouses));
        };
    }, [key]);

    useEffect(() => {
        const userRentHouses = localStorage.getItem(`user_email_${key}_rent_data`);
        if (userRentHouses) {
            setRentHouses(JSON.parse(userRentHouses));
        };
    }, [key]);
    return (
        <>
            <Header />
            <section className='h-screen w-full mx-auto flex justify-center md:items-start items-center pt-16 pb-2 font-roboto overflow-y-auto'>
                <div className='w-full md:w-5/6 flex flex-col h-full bg-white shadow-sm border text-black overflow-y-auto'>
                    <div className='flex flex-col lg:flex-row w-full h-[140px] md:h-[50px] mb-auto' >
                        <ul role="tablist" aria-label='Tabs' className='flex flex-col py-2 gap-y-8 mb-auto md:flex-row items-center justify-between w-full px-4 text-gray-500 text-sm border-b-neutral-100 border-b'>
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
                    <div className="p-4 m-auto h-full">
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
                            {!loadingBoughtHouse ? (
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-500 place-items-center'>
                                    {rentHouses.length > 0 && rentHouses.map((house) => {
                                        return (
                                            <div key={house.id} className='max-w-[300px] md:w-full lg:max-w-full justify-center items-center flex flex-col h-auto min-h-[160px] border bg-neutral-100 p-2 '>
                                                <div className="flex flex-col xl:flex-row items-center gap-x-4">
                                                    <Image alt='Casa' src={house.image} className=' h-auto w-[200px] bg-cover' />
                                                    <div className='flex flex-col gap-y-2 h-full justify-between w-full'>
                                                        <div className='flex flex-col w-full gap-y-2 text-sm'>
                                                            <p className='text-lg'>{house.address}, {house.country}</p>
                                                            <div className='flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row w-full lg:w-full gap-x-8 '>
                                                                <p>R${house.price},00</p>
                                                                <p>Quartos: {house.bedrooms}</p>
                                                                <p>Banheiros: {house.bathrooms}</p>
                                                            </div>
                                                            <p>Dias solicitados para aluguel: {house?.data?.rentDays}</p>
                                                            <p>Mensagem enviada para o proprietário: {house?.data?.notSendMessage ? 'Não' : 'Sim'}</p>
                                                            <p>Resposta do proprietário: {!house?.data?.ownerAnswer ? 'Pendente' : 'Respondida'}</p>
                                                        </div>
                                                        <div className='flex flex-col text-xs'>
                                                            <p className='flex flex-row items-center gap-x-2'><Image alt='Proprietário' src={house.agent.image} className='w-6 h-6 bg-cover' />  {house.agent.name} - ({house.agent.phone}) - Proprietário</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className='flex justify-center items-center w-full bg-red-600'>
                                    Carregando... <ImSpinner2 className='text-primaryPurple animate-spin' />
                                </div>
                            )}
                        </div>
                        <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-500 place-items-center'>
                                {boughtHouses.length > 0 && boughtHouses.map((house) => {
                                    return (
                                        <div key={house.id} className='max-w-[300px] md:w-full lg:max-w-full justify-center items-center flex flex-col h-auto min-h-[160px] border bg-neutral-100 p-2 '>
                                            <div className="flex flex-col xl:flex-row items-center gap-x-4">
                                                <Image alt='Casa' src={house.image} className=' h-auto w-[200px] bg-cover' />
                                                <div className='flex flex-col gap-y-2 h-full justify-between w-full'>
                                                    <div className='flex flex-col w-full gap-y-2 text-sm'>
                                                        <p className='text-lg'>{house.address}, {house.country}</p>
                                                        <div className='flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row w-full lg:w-full gap-x-8 '>
                                                            <p>R${house.price},00</p>
                                                            <p>Quartos: {house.bedrooms}</p>
                                                            <p>Banheiros: {house.bathrooms}</p>
                                                        </div>
                                                        <p>Mensagem enviada para o proprietário: {house?.data?.notSendMessage ? 'Não' : 'Sim'}</p>
                                                        <p>Resposta do proprietário: {!house?.data?.ownerAnswer ? 'Pendente' : 'Respondida'}</p>
                                                    </div>
                                                    <div className='flex flex-col text-xs'>
                                                        <p className='flex flex-row items-center gap-x-2'><Image alt='Proprietário' src={house.agent.image} className='w-6 h-6 bg-cover' />  {house.agent.name} - ({house.agent.phone}) - Proprietário</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile