import HouseContext from '@/contexts/Housecontext';
import { HouseData } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
    const { houses } = useContext(HouseContext)
    const items: any[] = houses.slice(0, 10).map((item: HouseData) => { return (<Link href={`details/${item.id}`}><Image className='w-32 h-32 rounded-full' alt='Imagem' src={item.image} /></Link>) });
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
                    <AliceCarousel
                        mouseTracking
                        infinite
                        autoPlay
                        autoPlayInterval={1000}
                        disableDotsControls
                        disableButtonsControls
                        animationDuration={2000}
                        items={items}
                        responsive={responsive}
                    />
            </div>
        </>
    )
}

export default Carousel