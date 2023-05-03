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
            <div className='w-full py-16 h-auto flex flex-col gap-y-4'>
                <p className='font-oswald text-2xl text-center lg:text-left'>Veja algumas das <span className='text-primaryPurple'>oportunidades</span> que esperam por você</p>
                <Swiper
                    modules={[Pagination]}
                    autoplay={true}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            678: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 60,
                            },
                        }
                    }
                    className='w-full'
                >
                    {houses && houses.map((house: HouseData) => {
                        return (
                            <SwiperSlide key={house.id}>
                                <Link href={`/details/${house.id}`}>
                                    <Image className='w-32 h-32 rounded-full' src={house.image} alt='Casas' />
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