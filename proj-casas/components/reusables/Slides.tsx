import React, { useRef, useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
interface SlidesProps {
    children: any,
    classes: string,
}

const Slides = ({ children, classes }: SlidesProps) => {
    const [_, setInit] = useState<boolean>(false);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    return (
        <>
            <Swiper
                modules={[Navigation]}
                autoplay
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                onInit={() => setInit(true)}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }
                }
                className={`relative ${classes}`}
            >
                {children}
                <div className='absolute left-0 top-[40%] cursor-pointer z-10 p-[2px] bg-primary rounded-full text-white font-semibold' ref={prevRef}><MdKeyboardArrowLeft size={30}/></div>
                <div className='absolute right-0 top-[40%] z-10 cursor-pointer p-[2px] bg-primary rounded-full text-white ' ref={nextRef}><MdKeyboardArrowRight size={30}/></div>
            </Swiper>
        </>
    )
}

export default Slides