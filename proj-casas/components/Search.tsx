import HouseContext from '@/contexts/Housecontext'
import React, { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import CountryDropDown from './CountryDropDown';
import PropertyDropDown from './PropertyDropdowns';
import PriceDropDown from './PriceDropdown';
const Search = () => {
    const { handleClick } = useContext(HouseContext);
    return (
        <>
            <div className='w-full flex flex-col items-center text-gray gap-y-4 text-base lg:text-lg'>
                <div className='w-full flex flex-col items-center lg:items-end font-oswald'>
                    <p className='text-secondary text-lg lg:text-2xl'>As disponíveis</p>
                    <p className=' text-primary text-3xl lg:text-5xl font-semibold text-center lg:text-start'>Veja todas as propriedades anunciadas</p>
                </div>
                <p className='text-xl lg:text-3xl font-oswald font-semibold text-primary pb-4 w-full flex justify-center lg:justify-start'>Aplique seus filtros</p>
                <div className='w-full rounded-md flex flex-col gap-y-6 lg:gap-y-0 items-center lg:flex-row justify-center p-4 lg:py-2 border border-slate-200 shadow-md shadow-quartiary md:justify-between'>
                    <div className='lg:w-1/4 w-full z-30 '>
                        <CountryDropDown />
                    </div>
                    <div className='lg:w-1/4 w-full z-20'>
                        <PropertyDropDown />
                    </div>
                    <div className='lg:w-1/4 w-full z-10'>
                        <PriceDropDown />
                    </div>
                    <button onClick={handleClick} className='w-full hover:scale-105 md:w-1/4 lg:w-32 justify-center flex flex-row bg-primary rounded-sm text-white hover:bg-primaryGreen/80 transition duration-200 py-2'>
                        <HiOutlineSearch className='m-1' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search