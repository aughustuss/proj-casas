import HouseContext from '@/contexts/Housecontext';
import { HouseData } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import { Pagination } from 'swiper'

const Carousel = () => {
    const { houses } = useContext(HouseContext)

    const responsive = {
        0: {
            items: 2,
        },
        678: {
            items: 4,
        },
        1024: {
            items: 6
        },
    };
    return (
        <>
            <div className='w-full pt-16 h-auto flex flex-col gap-y-4 '>
                <div className='w-full flex flex-col gap-y-2 font-oswald items-center lg:items-start'>
                    <p className='text-secondary text-2xl'>As melhores escolhas</p>
                    <p className=' text-primary text-5xl font-semibold text-center lg:text-start'>Veja as casas mais populares</p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    autoplay
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            678: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 60,
                            },
                        }
                    }
                    className='w-full'
                >
                    {houses && houses.map((house: HouseData) => {
                        return (
                            <SwiperSlide key={house.id}>
                                <Link className='w-full flex flex-col hover:bg-quartiary rounded-md transition duration-200 hover:shadow-md p-3' href={`/details/${house.id}`}>
                                    <div className='w-full flex flex-col gap-y-4 justify-center items-center'>
                                        <Image className='w-full max-w-xs h-36 rounded-md object-cover hover:scale-105 transition duration-200' src={house.image} alt='Casas' />
                                        <p className='text-primary text-lg font-semibold'>{house.address}</p>
                                        <p className='text-secondary self-start'>R$ <span className='text-gray font-semibold'>{house.price}</span> </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Carousel