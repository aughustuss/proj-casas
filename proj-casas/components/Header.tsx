import Link from 'next/link';
import React, { useContext } from 'react';
import { MdOutlineMenu } from 'react-icons/md'
import SideBarContext from '@/contexts/Sidebarcontext';
import {GiHouseKeys} from 'react-icons/gi'
const Header = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);
    return (
        <>
            <header className='bg-primaryPurple text-white transition duration-200 w-full fixed py-2 flex flex-row items-center shadow-sm z-50'>
                <div className='w-5/6 mx-auto flex flex-row items-center justify-between'>
                    <Link href='/' className='text-4xl text-primaryGreen font-semibold z-10 flex flex-row items-center font-oswald'>
                        <GiHouseKeys size={36}/> <span className='text-white' >House Ads</span>.
                    </Link>
                    <div className='hidden lg:flex flex-row items-center gap-x-4 font-roboto'>
                        <button>
                            Sign in
                        </button>
                        <button className='py-2 px-4 bg-primaryGreen rounded-sm hover:bg-primaryGreen/80 transition duration-200 text-white'>
                            Sign up
                        </button>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden block bg-primaryGreen hover:bg-primaryGreen/80 rounded-sm p-1 text-white transition duration-200'>
                        <MdOutlineMenu size={28} />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header