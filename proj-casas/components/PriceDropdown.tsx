import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import HouseContext from '@/contexts/Housecontext'
import { RiArrowDownSLine, RiArrowUpSLine, RiWalletLine } from 'react-icons/ri'
const PriceDropDown = () => {
    const { price, setPrice, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const prices = [
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
            <Menu as='div' className='relative w-full md:w-[250px]' >
                <Menu.Button className='w-full text-left flex flex-row items-center gap-x-2' onClick={() => setIsOpen(!isOpen)}>
                    <RiWalletLine size={24} />
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                {price}
                                <p className='text-xs text-gray-500'>Selecione o preço do imóvel</p>
                            </div>
                            <div>
                                {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className='list-none absolute bg-white top-full py-4 text-sm w-full'>
                    {prices && prices.map((price) => {
                        return (
                            <Menu.Item className='cursor-pointer hover:bg-neutral-100 p-4 w-full text-center' onClick={() => setPrice(price.value)} as='li' key={price.value}>
                                {price.value}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        </>
    )
}

export default PriceDropDown