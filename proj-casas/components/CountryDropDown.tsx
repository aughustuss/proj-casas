import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import HouseContext from '@/contexts/Housecontext'
import { HiOutlineMap } from 'react-icons/hi'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
const CountryDropDown = () => {
    const { country, setCountry, countries } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Menu as='div' className='relative w-full z-20' >
                <Menu.Button className='w-full text-left flex flex-row items-center gap-x-2' onClick={() => setIsOpen(!isOpen)}>
                    <HiOutlineMap size={24} />
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                {country}
                                <p className='text-xs text-gray-500'>Selecione a sua localidade</p>
                            </div>
                            <div>
                                {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className='list-none absolute bg-white top-full z-10 py-4 text-sm w-full'>
                    {countries && countries.map((country) => {
                        return (
                            <Menu.Item className='cursor-pointer hover:bg-neutral-100 p-4 w-full text-center' onClick={() => setCountry(country)} as='li' key={country}>
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