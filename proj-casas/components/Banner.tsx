import React, { useContext, useState } from 'react'
import BannerImage from '../public/images/hero-banner.png'
import Image from 'next/image'
import { HiOutlineSearch } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { HouseData } from '@/typings'
import Link from 'next/link'
import HouseContext from '@/contexts/Housecontext'
import { IoMdPin } from 'react-icons/io'

const Banner = () => {
    const { houses } = useContext(HouseContext);
    const [search, setSearch] = useState<string>('');
    const filteredSearch = search.length > 0 ? houses.filter((house: HouseData) => { return house.address.toLowerCase().includes(search.toLowerCase()) }) : [];
    return (
        <>
            <section id="hero" className='w-full md:h-auto pt-20 mb-8'>
                <div className='w-full flex flex-col md:flex-row items-center h-full gap-y-4 md:gap-y-0'>
                    <div className='flex-1 gap-y-6 h-full flex flex-col justify-start md:justify-center px-4 md:items-start text-center md:text-left items-center'>
                        <p className='text-4xl lg:text-5xl leading-none font-semibold font-oswald flex flex-col'><span className='text-primary text-5xl lg:text-8xl'>Descubra</span> a sua casa dos sonhos. </p>
                        <p className=' max-w-md'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?
                        </p>
                        <div className='flex flex-row justify-between w-full max-w-md items-center gap-x-4'>
                            <div className='flex flex-col w-full items-center'>
                                <p className='text-4xl flex flex-row'> {houses.length} <span className='text-secondary'> + </span></p>
                                <p className='text-gray'>Casas cadastradas</p>
                            </div>
                            <div className='flex flex-col w-full items-center'>
                                <p className='text-4xl flex flex-row'> 1000<span className='text-secondary'> + </span></p>
                                <p className='text-gray'>Clientes satisfeitos</p>
                            </div>
                        </div>
                        <div className='flex w-full lg:w-3/4 relative flex-row items-center'>
                            <div className='w-full flex flex-row items-center'>
                                <input placeholder='Busque por um endereço...' value={search} onChange={(e) => setSearch(e.target.value)} className={` ${search.length > 0 ? 'lg:w-full' : 'lg:w-3/5'} w-full focus:w-full transition-all bg-white duration-200 py-3 border-4 border-primary outline-none rounded-md text-gray-500 pl-8`} />
                                <IoMdPin className='absolute left-2' size={20} color='inherit' />
                                {
                                    search && search.length > 0 && (
                                        <CgClose onClick={() => setSearch('')} color='gray' className='absolute right-2 cursor-pointer' />
                                    )
                                }
                            </div>
                            <div className='w-full bg-white h-auto max-h-[200px] shadow-lg text-black rounded-b-md  text-center absolute top-full overflow-auto z-10'>
                                {search && search.length > 0 ? (
                                    filteredSearch.length > 0 ? (
                                        filteredSearch.map((houses: HouseData) => {
                                            return (
                                                <Link key={houses.id} className='font-semibold text-xs gap-x-2 hover:bg-primary duration-200 transition flex flex-row items-center w-full p-2 hover:text-white' href={`/details/${houses.id}`}>
                                                    <Image alt='Casa' src={houses.image} width={30} height={30} />{houses.address}, {houses.country}, ({houses.type})
                                                </Link>
                                            )
                                        })
                                    ) : (
                                        <p className='text-gray-600 text-sm'>Não encontramos resultados para a sua busca.</p>
                                    )
                                ) : (
                                    null
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 w-full md:block flex p-2 '>
                        <Image alt='Banner' src={BannerImage} className='w-full object-cover h-full rounded-md max-h-[400px] lg:max-h-[650px] self-end lg:p-2 lg:bg-black drop-shadow-lg' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner