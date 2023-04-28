import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import HouseContext from '@/contexts/Housecontext'
import { AiOutlineHome } from 'react-icons/ai'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
const PropertyDropDown = () => {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Menu as='div' className='relative w-full md:w-[250px] z-10' >
                <Menu.Button className='w-full text-left flex flex-row items-center gap-x-2' onClick={() => setIsOpen(!isOpen)}>
                    <AiOutlineHome size={24} />
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                {property}
                                <p className='text-xs text-gray-500'>Selecione o seu imóvel</p>
                            </div>
                            <div>
                                {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className='list-none absolute bg-white top-full py-4 text-sm w-full'>
                    {properties && properties.map((property) => {
                        return (
                            <Menu.Item className='cursor-pointer hover:bg-neutral-100 p-4 w-full text-center' onClick={() => setProperty(property)} as='li' key={property}>
                                {property}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        </>
    )
}

export default PropertyDropDown