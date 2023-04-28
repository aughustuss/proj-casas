import React from 'react'
import BannerImage from '../public/images/house-banner.png'
import Image from 'next/image'

const Banner = () => {
    return (
        <>
            <section className='w-full md:h-[640px] pt-20 mb-8'>
                <div className='w-full flex flex-col md:flex-row h-full'>
                    <div className='flex-1 gap-y-6 h-full flex flex-col justify-start md:justify-center px-4 md:px-0 md:items-start md:ml-10 lg:ml-20 text-center md:text-left items-center'>
                        <p className='text-4xl lg:text-5xl leading-none font-semibold'><span className='text-violet-700'>Conquiste</span> a sua casa dos sonhos aqui. </p>
                        <p className=' max-w-lg'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?
                        </p>
                    </div>
                    <div className='flex-1 hidden md:flex'>
                        <Image alt='Banner' src={BannerImage} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner