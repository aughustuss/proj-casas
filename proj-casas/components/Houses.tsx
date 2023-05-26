import HouseContext from '@/contexts/Housecontext'
import React, { useContext, useState } from 'react'
import { HouseData } from '@/typings';
import { ImSpinner2 } from 'react-icons/im'
import { Pagination } from '@mui/material';
import mediaQuery from '@/utils/mediaquery';
import Slides from './reusables/Slides';
import { SwiperSlide } from 'swiper/react';
import HouseItem from './reusables/HouseItem';

const Houses = () => {
    const { houses, loading } = useContext(HouseContext);
    const [page, setPage] = useState(1);
    const isAboveSM = mediaQuery("(min-width: 640px)")
    if (loading) {
        return <div className='w-full h-full flex justify-center items-center mt-48'><ImSpinner2 className='flex h-10 w-10 text-primary animate-spin' /></div>
    };
    if (houses.length < 1) {
        return <div className='w-full h-full flex justify-center items-center mt-48'>Desculpe, não há resultados para a sua busca. </div>
    }
    return (
        <>
            <section id="houses" className='w-full '>
                {isAboveSM ? (
                    <div className='w-full flex flex-col justify-center '>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {houses && houses.slice((page - 1) * 12, (page - 1) * 12 + 12).map((house: HouseData) => {
                                return (
                                    <HouseItem key={house.id} house={house}/>
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
                ) : (
                    <Slides classes='w-full'>
                        {houses && houses.length > 0 && houses.map((house: HouseData) => {
                            return (
                                <SwiperSlide key={house.id} className='py-2'>
                                   <HouseItem house={house} />
                                </SwiperSlide>
                            )
                        })}
                    </Slides>
                )}
            </section>
        </>
    )
}

export default Houses