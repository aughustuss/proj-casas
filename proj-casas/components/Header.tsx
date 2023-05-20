import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdAccountCircle, } from 'react-icons/md'
import { GiHouseKeys } from 'react-icons/gi'
import { CgMenu } from 'react-icons/cg'
import { useSession, signOut } from 'next-auth/react'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { BsPersonFillAdd } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { headerLinks } from '@/utils/data';
import { HeaderLink } from '@/typings';
const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const { data: session } = useSession();
    const [targetElementsPresent, setTargetElementsPresent] = useState<boolean[]>([]);

    useEffect(() => {
        const checkTargetElements = () => {
            const elementsPresent = headerLinks.map((link) => {
                const targetElement = document.getElementById(link.href.slice(1));
                return targetElement !== null;
            });
            setTargetElementsPresent(elementsPresent);
        };

        checkTargetElements();
        window.addEventListener('resize', checkTargetElements);

        return () => {
            window.removeEventListener('resize', checkTargetElements);
        };
    }, [headerLinks]);
    return (
        <>
            <header className=' bg-primary text-white transition duration-200 w-full fixed py-2 flex flex-row items-center shadow-md z-50 font-poppins'>
                <div className='w-5/6 relative mx-auto flex flex-row items-center justify-between'>
                    <Link href='/' className='text-4xl text-secondary font-semibold z-10 flex flex-row items-center font-oswald'>
                        <GiHouseKeys size={36} /> <span className='text-white' >House Ads</span>.
                    </Link>
                    <div className='hidden lg:flex flex-row gap-x-8 text-sm'>
                        {headerLinks && headerLinks.map((link, index) => {
                            if (targetElementsPresent[index]) {
                                return (
                                    <AnchorLink
                                        className="hover:after:bg-white after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in after:content hover:after:w-full"
                                        key={link.id}
                                        href={link.href}
                                        offset={link.offset}
                                    >
                                        {link.children}
                                    </AnchorLink>
                                );
                            } else {
                                return (
                                    <Link key={link.id} href='/'>
                                        {link.children}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    {!session ? (
                        <div className='hidden lg:flex flex-row items-center gap-x-4 text-sm'>
                            <Link href='/auth/Signin'>
                                <button className='py-1 px-4 rounded-sm tracking-wide transition duration-200 text-white'>
                                    Sign in
                                </button>
                            </Link>
                            <Link href='/auth/Signup'>
                                <button className='py-1 px-4 bg-secondary tracking-wide rounded-sm hover:bg-secondary/80 transition duration-200 text-white'>
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='hidden lg:flex flex-row items-center gap-x-4 text-sm'>
                            <Link href=''>
                                <button onClick={() => signOut()} className='py-1 px-4 bg-secondary rounded-sm hover:bg-secondary/80 transition duration-200 text-white'>Sign Out</button>
                            </Link>
                            <Link href='/profile'>
                                {session && session.user?.image ? (
                                    <img alt='Foto de perfil' src={session.user.image} className='w-8 h-8 rounded-full' />
                                ) : (
                                    <div>
                                        <MdAccountCircle className='w-8 h-8' />
                                    </div>
                                )}
                            </Link>
                        </div>
                    )}

                    <div className='flex-row items-center gap-x-4 lg:hidden flex text-sm'>

                        <div className='relative flex flex-row items-center'>
                            <button onClick={() => setMenuOpen(!isMenuOpen)} className='  hover:bg-primary/90 rounded-sm p-1 text-white transition duration-200 '>
                                <CgMenu size={28} />
                            </button>
                            {isMenuOpen ? (
                                <div className={`${isMenuOpen ? 'top-full' : '-top-20'} text-xs transition-all duration-200 absolute w-[240px] h-auto -right-full bg-primary rounded-b-md`}>
                                    <div className='w-full flex flex-col items-center gap-y-2 p-2 '>
                                        {headerLinks && headerLinks.map((link, index) => {
                                            if (targetElementsPresent[index]) {
                                                return (
                                                    <AnchorLink key={link.id} className='p-2 w-full text-center hover:bg-quinary' href={link.href} >
                                                        {link.children}
                                                    </AnchorLink>
                                                );
                                            } else {
                                                return (
                                                    <Link key={link.id} href='/' className='p-2 w-full text-center hover:bg-quinary'>
                                                        {link.children}
                                                    </Link>
                                                );
                                            }
                                        })}
                                    </div>
                                    <ul className='flex flex-col w-full p-2 gap-y-2 border-t border-neutral-100'>
                                        {session ? (
                                            <div className='flex flex-col w-full justify-center'>
                                                <Link className='w-full pb-2' href='/profile'><button className='w-full justify-center px-4 py-2 hover:bg-quinary text-white flex flex-row-reverse items-center relative'>Minha Conta <MdAccountCircle size={24} className='absolute left-0' /> </button></Link>
                                                <button onClick={() => signOut()} className='w-full justify-center px-4 py-2 hover:bg-quinary text-white flex flex-row-reverse items-center relative'>Sign Out <BiLogOut size={24} className='absolute left-0' /> </button>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col w-full gap-y-2 justify-center '>
                                                <Link className='w-full' href='/auth/Signin'><button className='w-full justify-center px-4 py-2 hover:bg-quinary text-white flex flex-row-reverse items-center relative'>Sign In <BiLogIn size={24} className='absolute left-0' /> </button></Link>
                                                <Link className='w-full' href='/auth/Signup'><button className='w-full justify-center px-4 py-2 hover:bg-quinary text-white flex flex-row-reverse items-center relative'>Sign Up <BsPersonFillAdd size={24} className='absolute left-0' /> </button></Link>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header