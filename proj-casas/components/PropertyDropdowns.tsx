import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import HouseContext from '@/contexts/Housecontext'
import { AiOutlineHome } from 'react-icons/ai'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
const PropertyDropDown = () => {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Menu as='div' className='relative w-full ' >
                <Menu.Button className='w-full text-left flex flex-row items-center gap-x-2 text-primary' onClick={() => setIsOpen(!isOpen)}>
                    <div className='bg-quartiary text-quinary p-2 rounded-md'>
                        <AiOutlineHome />
                    </div>
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <p className='font-semibold font-oswald '>{property}</p>
                                <p className='text-xs text-gray'>Selecione o seu imóvel</p>
                            </div>
                            <div className='bg-quartiary text-quinary p-2 rounded-md'>
                                {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className='list-none absolute bg-neutral-100 rounded-b-md top-full py-4 w-full'>
                    {properties && properties.map((property) => {
                        return (
                            <Menu.Item className='cursor-pointer hover:bg-neutral-200 p-4 w-full text-center' onClick={() => setProperty(property)} as='li' key={property}>
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