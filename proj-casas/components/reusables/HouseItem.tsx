import { HouseData } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiArea, BiBath, BiBed } from 'react-icons/bi'

interface HouseProps {
    house: HouseData;
}

const HouseItem = ({house}: HouseProps) => {
    return (
        <>
            <Link key={house.id} className='w-full flex flex-col justify-center items-center hover:bg-quartiary transition duration-200' href={`/details/${house.id}`}>
                <div className='flex flex-col justify-between w-full max-w-xs min-h-[280px] max-h-[350px] h-full rounded-md shadow-md p-1 sm:p-4 gap-y-2'>
                    <div className='flex flex-col gap-y-4'>
                        <Image src={house.image} alt='Casa' className='hover:scale-105 transition duration-200 w-full object-cover h-[90px] sm:h-[130px] rounded-md' />
                        <div className='w-full flex flex-wrap flex-row  items-center gap-2 text-white text-xs lg:text-sm'>
                            <p className='bg-primary w-fit rounded-full px-2 text-center '>{house.type}</p>
                            <p className='bg-secondary w-fit rounded-full px-2 text-center'>{house.country}</p>
                            {house.rentable && (
                                <p className=' bg-quinary w-fit rounded-full px-2 text-center'>Alugável</p>
                            )}
                            <p className='text-gray text-sm lg:text-lg'>{house.address}</p>
                            <div className='flex flex-row flex-wrap  gap-x-2 text-gray items-start sm:items-center text-xs sm:text-sm lg:text-base'>
                                <p className='flex flex-row items-center gap-x-2'> <BiBath /> {house.bathrooms}</p>
                                <p className='flex flex-row items-center gap-x-2'> <BiBed /> {house.bedrooms}</p>
                                <p className='flex flex-row items-center gap-x-2'> <BiArea /> {house.surface}</p>
                            </div>
                        </div>
                    </div>
                    <p className='flex flex-row items-center gap-x-2 text-gray font-semibold text-sm lg:text-lg'> <span className='text-secondary'>R$</span>{house.price},00</p>
                </div>
            </Link>
        </>
    )
}

export default HouseItem