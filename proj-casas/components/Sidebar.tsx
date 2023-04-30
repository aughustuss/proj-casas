import SideBarContext from '@/contexts/Sidebarcontext'
import React, { useContext } from 'react'
import { Button } from '@mui/material';

const Sidebar = () => {
    const { isOpen } = useContext(SideBarContext);
    return (
        <>
            <div className={`${isOpen? 'right-0' : '-right-full'} lg:hidden fixed h-full bg-primaryPurple z-40 w-2/3 md:w-1/2 lg:w-1/3 transition-all duration-200`}>
                <div className='w-full h-full flex flex-col pt-16 pb-4 px-4 justify-between items-center text-white'>
                    <div>
                        Links
                    </div>
                    <div className='w-full flex flex-col gap-y-2 text-white'>
                        <Button className='w-full py-2 px-4 rounded-sm hover:bg-violet-800 transition duration-200 text-white'>
                            Sign in
                        </Button>
                        <Button className='w-full py-2 px-4 bg-primaryGreen rounded-sm hover:bg-primaryGreen/80 transition duration-200 text-white'>
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar