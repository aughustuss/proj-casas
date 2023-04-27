import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
const Search = () => {
    return (
        <>
            <div className='w-5/6 mx-auto flex flex-col md:flex-row items-center'>
                <div className='w-full flex flex-col gap-y-2 md:gap-y-0 items-center md:flex-row text-primaryPurple rounded-sm justify-center py-1 px-2 bg-white border shadow-md md:justify-between'>
                    <div className=''>
                        Cidades
                    </div>
                    <div>
                        Estados
                    </div>
                    <div>
                        Preços
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