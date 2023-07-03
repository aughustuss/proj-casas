import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import HouseContext from '@/contexts/Housecontext'
import { HiOutlineMap } from 'react-icons/hi'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
const CountryDropDown = () => {
    const { country, setCountry, countries } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Menu as='div' className='relative w-full' >
                <Menu.Button className='w-full text-left flex flex-row items-center gap-x-2 text-primary' onClick={() => setIsOpen(!isOpen)}>
                    <div className='bg-quartiary text-quinary p-2 rounded-md'>
                        <HiOutlineMap/>
                    </div>
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <p className='font-semibold font-oswald '>{country}</p>
                                <p className='text-xs text-gray'>Selecione a sua localidade</p>
                            </div>
                            <div className='bg-quartiary text-quinary p-2 rounded-md'>
                                {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className='list-none absolute bg-neutral-100 rounded-b-md top-full z-10 py-4 text-sm w-full'>
                    {countries && countries.map((country) => {
                        return (
                            <Menu.Item className='cursor-pointer hover:bg-neutral-200 p-4 w-full text-center' onClick={() => setCountry(country)} as='li' key={country}>
                                {country}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        </>
    )
}

export default CountryDropDown