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
            <div className='w-full flex flex-col lg:flex-row items-center'>
                <p className='text-xl pb-4 block lg:hidden'>Aplique seus filtros</p>
                <div className='w-full flex flex-col gap-y-6 lg:gap-y-0 items-center lg:flex-row text-primaryPurple rounded-sm justify-center p-4 lg:py-2 border shadow-md md:justify-between'>
                    <div className='md:w-[250px] w-full z-30'>
                        <CountryDropDown />
                    </div>
                    <div className='md:w-[250px] w-full z-20'>
                        <PropertyDropDown />
                    </div>
                    <div className='md:w-[250px] w-full z-10'>
                        <PriceDropDown/>
                    </div>
                    <button onClick={handleClick} className='w-full lg:w-32 justify-center flex flex-row bg-primary rounded-sm text-white hover:bg-primaryGreen/80 transition duration-200 py-2'>
                        <HiOutlineSearch size={20} className='m-1' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search