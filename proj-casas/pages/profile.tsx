import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState, useEffect } from 'react'
import { ContactFormData, HouseData } from '@/typings'
import { useSession, signOut } from 'next-auth/react'
import { ImSpinner2 } from 'react-icons/im'
import Image from 'next/image'
import { MdAccountCircle } from 'react-icons/md'
import { BiMoney } from 'react-icons/bi'
import { BsKeyFill } from 'react-icons/bs'
const Profile = () => {
    const [rentHouses, setRentHouses] = useState<HouseData[]>([]);
    const [boughtHouses, setBoughtHouses] = useState<HouseData[]>([]);
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
            <section className='min-h-screen h-auto w-full mx-auto flex justify-center md:items-start items-center pt-16 pb-2 font-poppins overflow-y-auto '>
                <div className='container px-2 md:px-0 flex flex-col h-full overflow-y-auto text-gray'>
                    <div className='flex flex-col lg:flex-row w-full h-auto min-h-[140px] md:min-h-[50px] mb-auto bg-white  rounded-md' >
                        <ul role="tablist" aria-label='Tabs' className='flex flex-col py-2 gap-y-2 lg:text-[14px] text-xs mb-auto md:flex-row items-center gap-x-4 justify-between w-full px-4 border-b-neutral-100 border-b'>
                            <button type="button" className='flex flex-row items-center hover:text-primary hover:scale-105 transition duration-200 hover:bg-quartiary font-semibold text-quinary hs-tab-active:text-primary lg:bg-none bg-neutral-100 w-full p-2 rounded-sm border-slate-200' id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                <MdAccountCircle size={20} /> <span className='flex-1'>Minha conta</span>
                            </button>
                            <button type="button" className='flex flex-row items-center hover:text-primary hover:scale-105 transition duration-200 hover:bg-quartiary font-semibold text-quinary hs-tab-active:text-primary lg:bg-none bg-neutral-100 w-full p-2 rounded-sm border-slate-200 ' id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                <BsKeyFill size={20} /> <span className='flex-1'> Meus pedidos de aluguel</span>
                            </button>
                            <button type="button" className='flex flex-row items-center hover:text-primary hover:scale-105 transition duration-200 hover:bg-quartiary font-semibold text-quinary hs-tab-active:text-primary lg:bg-none bg-neutral-100 w-full p-2 rounded-sm border-slate-200' id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                                <BiMoney size={20} /> <span className='flex-1'>Meus pedidos de compra</span>
                            </button>
                        </ul>
                    </div>
                    <div className="p-4 mt-2 h-full bg-white w-full rounded-md ">
                        <div className='flex flex-col justify-between h-full min-h-[540px] gap-y-8' id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                            <div className='text-center capitalize font-oswald text-2xl lg:text-4xl w-full flex flex-col gap-y-12 h-full'>
                                <div className='flex flex-col-reverse gap-y-4 lg:flex-row items-center font-semibold  w-full text-center'>
                                    <p className='md:flex-1 text-primary'>Olá, {session && session?.user?.name}!</p>
                                    {session && session.user?.image && (
                                        <img alt='Perfill' src={session.user.image} className='rounded-full object-cover h-20 w-20 lg:h-28 lg:w-28' />
                                    )}
                                </div>
                                <div className='flex flex-col w-full gap-y-8 font-roboto'>
                                    <p className='text-xl lg:text-2xl font-semibold font-oswald text-center'>Suas informações pessoais: </p>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray text-xs lg:text-base'>
                                        <p className='p-2 bg-quartiary border-slate-200 rounded-sm'>Email: {session && session?.user?.email}</p>
                                        <p className='p-2 bg-quartiary border-slate-200 rounded-sm'>Nome registrado: {session && session?.user?.name}</p>
                                        <p className='p-2 bg-quartiary border-slate-200 rounded-sm col-span-1 lg:col-span-2'>Sessão expira em: {session && session.expires ? new Date(session?.expires).toLocaleDateString() : ''} </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full justify-center flex flex-row  lg:text-base'>
                                <button onClick={() => signOut()} className='transition duration-200 w-full lg:w-2/5 text-xs lg:text-sm bg-quartiary font-semibold hover:bg-primary hover:scale-105 hover:text-white text-quinary px-4 py-2 rounded-sm tracking-wide'>Sign Out</button>
                            </div>
                        </div>
                        <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                            {rentHouses && rentHouses.length > 0 ? (
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center py-4'>
                                    {rentHouses.length > 0 && rentHouses.map((house) => {
                                        return (
                                            <div key={house.id} className='max-w-[300px] md:w-full lg:max-w-full justify-center items-center flex flex-col h-auto  border-slate-200 bg-neutral-100 p-2 rounded-md shadow-md'>
                                                <div className="flex flex-col items-center gap-x-4 overflow-hidden w-full gap-y-2">
                                                    <div className='flex xl:flex-row flex-col w-full gap-x-4'>
                                                        <Image alt='Casa' src={house.image} className='self-start max-h-[140px] lg:max-h-[150px] h-full bg-black w-full max-w-full rounded-md object-cover' />
                                                        <div className='flex flex-col gap-y-2 h-full justify-between w-full'>
                                                            <div className='flex flex-col w-full gap-y-2 text-xs'>
                                                                <p className='text-lg font-semibold text-primary'>{house.address}, {house.country}</p>
                                                                <div className='flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row gap-x-8 '>
                                                                    <p>R${house.price},00</p>
                                                                    <p>Quartos: {house.bedrooms}</p>
                                                                    <p>Banheiros: {house.bathrooms}</p>
                                                                </div>
                                                                <p>Dias solicitados para aluguel: {house?.data?.rentDays}</p>
                                                                <p>Mensagem enviada para o proprietário: {house?.data?.notSendMessage ? 'Não' : 'Sim'}</p>
                                                                <p>Resposta do proprietário: {!house?.data?.ownerAnswer ? 'Pendente' : 'Respondida'}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col text-xs w-full'>
                                                        <p className='flex flex-row items-center gap-x-2'><Image alt='Proprietário' src={house.agent.image} className='w-6 h-6 bg-cover' />  {house.agent.name} - ({house.agent.phone}) - Proprietário</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className='flex justify-center items-center w-full h-full text-sm min-h-[540px]'>
                                    Não há nada para exibir.
                                </div>
                            )}
                        </div>
                        <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
                            {boughtHouses && boughtHouses.length ? (
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center py-4'>
                                    {boughtHouses.length > 0 && boughtHouses.map((house) => {
                                        return (
                                            <div key={house.id} className='max-w-[300px] md:w-full lg:max-w-full justify-center items-center flex flex-col h-auto  border-slate-200 bg-neutral-100 p-2 rounded-md shadow-md'>
                                                <div className="flex flex-col items-center gap-x-4 overflow-hidden w-full gap-y-2">
                                                    <div className='flex xl:flex-row flex-col w-full gap-x-4'>
                                                        <Image alt='Casa' src={house.image} className='self-start max-h-[140px] lg:max-h-[150px] h-full bg-black w-full max-w-full rounded-md object-cover' />
                                                        <div className='flex flex-col gap-y-2 h-full justify-between w-full'>
                                                            <div className='flex flex-col w-full gap-y-2 text-xs'>
                                                                <p className='text-lg font-semibold text-primary'>{house.address}, {house.country}</p>
                                                                <div className='flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row gap-x-8 '>
                                                                    <p>R${house.price},00</p>
                                                                    <p>Quartos: {house.bedrooms}</p>
                                                                    <p>Banheiros: {house.bathrooms}</p>
                                                                </div>
                                                                <p>Mensagem enviada para o proprietário: {house?.data?.notSendMessage ? 'Não' : 'Sim'}</p>
                                                                <p>Resposta do proprietário: {!house?.data?.ownerAnswer ? 'Pendente' : 'Respondida'}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col text-xs w-full'>
                                                        <p className='flex flex-row items-center gap-x-2'><Image alt='Proprietário' src={house.agent.image} className='w-6 h-6 bg-cover' />  {house.agent.name} - ({house.agent.phone}) - Proprietário</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className='flex justify-center items-center w-full h-full text-sm min-h-[540px]'>
                                    Não há nada para exibir.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile