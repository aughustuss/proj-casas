import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import HouseContext from '@/contexts/Housecontext'
import { RiWalletLine } from 'react-icons/ri'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
const PriceDropDown = () => {
    const { price, setPrice } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const prices = [
        {
            value: "10000 - 100000",
        },
        {
            value: '100000 - 120000',
        },
        {
            value: '120000 - 140000',
        },
        {
            value: '140000 - 160000',
        },
        {
            value: '160000 - 180000'
        },
        {
            value: '180000 - 200000'
        },
        {
            value: '200000 - 220000'
        },
        {
            value: '220000 - 240000'
        },
        {
            value: '240000 - 260000'
        }
    ];
    return (
        <>
            <Menu as='div' className='relative w-full ' >
                <Menu.Button className='w-full text-left flex flex-row items-center gap-x-2 text-primary' onClick={() => setIsOpen(!isOpen)}>
                    <div className='bg-quartiary text-quinary p-2 rounded-md'>
                        <RiWalletLine size={24} />
                    </div>
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <p className='font-oswald font-semibold text-lg'>{price}</p>
                                <p className='text-xs text-gray font-thin'>Selecione o preço do imóvel</p>
                            </div>
                            <div className='bg-quartiary text-quinary p-2 rounded-md'>
                                {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className='list-none absolute bg-neutral-100 rounded-b-md top-full py-4 text-sm w-full h-[200px] overflow-auto'>
                    {prices && prices.map((price) => {
                        return (
                            <Menu.Item className='cursor-pointer hover:bg-neutral-200 p-4 w-full text-center' onClick={() => setPrice(price.value)} as='li' key={price.value}>
                                R${price.value}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        </>
    )
}

export default PriceDropDown