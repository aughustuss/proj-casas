import Image from 'next/image'
import React from 'react'
import RoomBaner from '../public/images/room-banner.jpg'

const Roombanner = () => {
    return (
        <>
            <section className='w-full md:h-auto lg:pt-20 mb-8 '>
                <div className='w-full flex flex-col md:flex-row-reverse items-center h-full gap-y-4 md:gap-y-0'>
                    <div className='flex-1 gap-y-6 h-full flex flex-col justify-start md:justify-center px-4 md:px-0 md:items-start md:ml-10 lg:ml-20 text-center md:text-left items-center'>
                        <p className='text-4xl lg:text-5xl leading-none font-semibold font-oswald flex flex-col'><span className='text-primary text-5xl lg:text-7xl'>Realize o desejo </span> de um novo lar. <span className='text-primary text-5xl lg:text-7xl'>Vida </span>nova, cara nova.</p>
                        <p className=' max-w-lg'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?
                        </p>
                    </div>
                    <div className='flex-1 w-full justify-start md:block flex'>
                        <Image alt='Banner' src={RoomBaner} className='w-full h-full max-h-[400px] lg:max-h-[650px] object-cover rounded-md self-end lg:p-2 lg:bg-black bg-cover' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Roombanner