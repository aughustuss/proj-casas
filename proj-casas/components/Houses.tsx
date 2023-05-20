import HouseContext from '@/contexts/Housecontext'
import React, { useContext, useState } from 'react'
import { HouseData } from '@/typings';
import Link from 'next/link';
import Image from 'next/image';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { ImSpinner2 } from 'react-icons/im'
import { Pagination } from '@mui/material';

const Houses = () => {
    const { houses, loading } = useContext(HouseContext);
    const [page, setPage] = useState(1);
    if (loading) {
        return <div className='w-full h-full flex justify-center items-center mt-48'><ImSpinner2 className='flex h-10 w-10 text-primary animate-spin' /></div>
    };
    if (houses.length < 1) {
        return <div className='w-full h-full flex justify-center items-center mt-48'>Desculpe, não há resultados para a sua busca. </div>
    }
    return (
        <>
            <section id="houses" className='w-full'>
                <div className='w-full flex flex-col justify-center '>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {houses && houses.slice((page - 1) * 12, (page - 1) * 12 + 12).map((house: HouseData) => {
                            return (
                                <Link key={house.id} className='w-full flex flex-col justify-center items-center hover:bg-quartiary transition duration-200 font-roboto' href={`/details/${house.id}`}>
                                    <div className='flex flex-col justify-between w-full max-w-xs min-h-[300px] max-h-[350px] h-full rounded-md shadow-md p-4 gap-y-4'>
                                        <div className='flex flex-col gap-y-4'>
                                            <Image src={house.image} alt='Casa' className='hover:scale-105 transition duration-200 w-full object-cover h-[130px] rounded-md' />
                                            <div className='w-full flex flex-wrap flex-row  items-center gap-2 text-white text-sm'>
                                                <p className='bg-primary w-fit rounded-full px-2 text-center '>{house.type}</p>
                                                <p className='bg-secondary w-fit rounded-full px-2 text-center'>{house.country}</p>
                                                {house.rentable && (
                                                    <p className=' bg-quinary w-fit rounded-full px-2 text-center'>Alugável</p>
                                                )}
                                                <p className='text-gray text-base'>{house.address}</p>
                                                <div className='flex flex-row gap-x-2 text-gray items-center'>
                                                    <p className='flex flex-row items-center gap-x-2'> <BiBath/> {house.bathrooms}</p>
                                                    <p className='flex flex-row items-center gap-x-2'> <BiBed/> {house.bedrooms}</p>
                                                    <p className='flex flex-row items-center gap-x-2'> <BiArea/> {house.surface}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='flex flex-row items-center gap-x-2 text-gray font-semibold text-lg'> <span className='text-secondary'>R$</span>{house.price},00</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <Pagination
                        count={Math.ceil(houses.length / 12)}
                        onChange={(_, value) => {
                            setPage(value);
                        }}
                        shape='rounded'
                        sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}
                    />
                </div>
            </section>
        </>
    )
}

export default Houses