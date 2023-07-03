import HouseContext from '@/contexts/Housecontext';
import { HouseData } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { SwiperSlide } from 'swiper/react';
import Slides from './reusables/Slides';
import mediaQuery from '@/utils/mediaquery';

const Carousel = () => {
    const { houses } = useContext(HouseContext)
    return (
        <>
            <div className='w-full pt-16 h-auto flex flex-col gap-y-4 lg:text-base text-sm py-4'>
                <div className='w-full flex flex-col gap-y-2 font-oswald items-center lg:items-start'>
                    <p className='text-secondary text-lg lg:text-2xl'>As melhores escolhas</p>
                    <p className=' text-primary text-3xl lg:text-5xl font-semibold text-center lg:text-start'>Veja as casas mais populares</p>
                </div>
                <Slides classes='w-full'>
                    {houses && houses.map((house: HouseData) => {
                        return (
                            <SwiperSlide key={house.id}>
                                <Link className='w-full flex flex-col hover:bg-quartiary rounded-md transition duration-200 hover:shadow-md lg:p-3' href={`/details/${house.id}`}>
                                    <div className='w-full flex flex-col gap-y-4 justify-center items-center'>
                                        <Image className='w-full max-w-xs max-h-24 h-24 sm:h-28 sm:max-h-28 lg:h-32 lg:max-h-32 rounded-md object-cover hover:scale-105 transition duration-200' src={house.image} alt='Casas' />
                                        <p className='text-primary text-base lg:text-lg font-semibold'>{house.address}</p>
                                        <p className='text-secondary self-start font-semibold'>R$ <span className='text-gray '>{house.price}</span> </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Slides>
            </div>
        </>
    )
}

export default Carousel