import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className='w-full fixed py-2 flex flex-row items-center text-black bg-neutral-100 shadow-sm z-50' >
                <div className='w-5/6 mx-auto flex flex-row items-center justify-between'>
                    <Link href='/' className='text-2xl font-semibold'>
                        HomeLAD
                    </Link>
                    <div>
                        Links
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <button>
                            Sign in
                        </button>
                        <button className='py-2 px-4 bg-primaryGreen rounded-sm hover:bg-primaryGreen/80 transition duration-200 text-white'>
                            Sign up
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header