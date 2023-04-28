import HouseContext from '@/contexts/Housecontext'
import React, { useContext } from 'react'
import { HouseData } from '@/typings';
import Link from 'next/link';
import Image from 'next/image';
import {BiBed, BiBath, BiMoney, BiArea} from 'react-icons/bi'

const Houses = () => {
    const { houses, loading } = useContext(HouseContext);
    return (
        <>
            <section className='w-full '>
                <div className='w-full flex flex-col justify-center '>
                    {!loading && houses && (
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                            { houses.map((house: HouseData) => {
                                return (
                                    <Link className='w-full flex flex-col justify-center items-center brightness-95 hover:brightness-100 transition duration-200' href={`/details/${house.id}`}>
                                        <div className='flex flex-col justify-center w-full max-w-xs max-h-[450px] bg-white shadow-md p-4 gap-y-4'>
                                            <Image src={house.image} alt='Casa' className='hover:scale-105 transition duration-200' />
                                            <div className='flex flex-col w-full gap-y-2'>
                                                <div className='w-full flex flex-row items-center gap-x-2 text-white text-sm'>
                                                    <p className='bg-primaryGreen w-fit rounded-full px-2 text-center'>{house.type}</p>
                                                    <p className='bg-primaryPurple w-fit rounded-full px-2 text-center'>{house.country}</p>
                                                </div>
                                                <div>
                                                    <p className='font-semibold'>{house.address}</p>
                                                </div>
                                                <div className='flex flex-row items-center text-gray-400 gap-x-4'>
                                                    <p className='flex flex-row items-center gap-x-1'><BiBed/>{house.bedrooms}</p>
                                                    <p className='flex flex-row items-center gap-x-1'><BiBath/>{house.bathrooms}</p>
                                                    <p className='flex flex-row items-center gap-x-1'><BiArea/>{house.surface}</p>
                                                </div>
                                                <p className='flex flex-row items-center text-primaryPurple font-semibold gap-x-2'><BiMoney/>{house.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }) }
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Houses