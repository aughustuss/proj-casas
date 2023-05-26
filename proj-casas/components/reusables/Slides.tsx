import React from 'react'
import { Pagination } from 'swiper'
import { Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination"

interface SlidesProps {
    children: any,
    classes: string,
}

const Slides = ({ children, classes }: SlidesProps) => {
    return (
        <>
            <Swiper
                modules={[Pagination]}
                autoplay
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
                className={classes}
            >
                {children}
            </Swiper>
        </>
    )
}

export default Slides