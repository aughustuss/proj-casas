import HouseContext from '@/contexts/Housecontext'
import React, { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import CountryDropDown from './CountryDropDown';
import PropertyDropDown from './PropertyDropdowns';
import PriceDropDown from './PriceDropdown';
const Search = () => {
    const { houses } = useContext(HouseContext);
    return (
        <>
            <div className='w-full mx-auto flex flex-col md:flex-row items-center'>
                <div className='w-full flex flex-col gap-y-2 md:gap-y-0 items-center md:flex-row text-primaryPurple rounded-sm justify-center py-1  bg-white border shadow-md md:justify-between'>
                    <div className='md:w-[250px] w-full'>
                        <CountryDropDown />
                    </div>
                    <div className='md:w-[250px] w-full'>
                        <PropertyDropDown />
                    </div>
                    <div className='md:w-[250px] w-full'>
                        <PriceDropDown/>
                    </div>
                    <button className='w-full md:w-32 justify-center flex flex-row bg-primaryPurple rounded-md text-white hover:bg-primaryPurple/90 transition duration-200'>
                        <HiOutlineSearch size={20} className='m-3' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search