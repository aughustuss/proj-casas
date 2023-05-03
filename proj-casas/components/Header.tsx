import Link from 'next/link';
import Image from 'next/image'
import React, { useContext, useState } from 'react';
import { MdAccountCircle, } from 'react-icons/md'
import SideBarContext from '@/contexts/Sidebarcontext';
import { GiHouseKeys } from 'react-icons/gi'
import { HiOutlineSearch } from 'react-icons/hi';
import { CgClose, CgMenu } from 'react-icons/cg'
import { Button } from '@mui/material';
import { HouseData } from '@/typings';
import HouseContext from '@/contexts/Housecontext';
import { useSession, signOut } from 'next-auth/react'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { BsPersonFillAdd } from 'react-icons/bs';
const Header = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const { houses } = useContext(HouseContext);
    const [search, setSearch] = useState<string>('');
    const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
    const filteredSearch = search.length > 0 ? houses.filter((house: HouseData) => { return house.address.toLowerCase().includes(search.toLowerCase()) }) : [];
    const { data: session } = useSession();
    return (
        <>
            <header className=' bg-primaryPurple text-white transition duration-200 w-full fixed py-2 flex flex-row items-center shadow-sm z-50 '>
                <div className='w-5/6 relative mx-auto flex flex-row items-center justify-between'>
                    <Link href='/' className='text-4xl text-primaryGreen font-semibold z-10 flex flex-row items-center font-oswald'>
                        <GiHouseKeys size={36} /> <span className='text-white' >House Ads</span>.
                    </Link>
                    <div className='hidden lg:flex w-2/4 relative flex-row items-center'>
                        <div className='w-full flex flex-row items-center'>
                            <input placeholder='Pesquise pelo endereço...' value={search} onChange={(e) => setSearch(e.target.value)} className={` ${search.length > 0 ? 'w-full' : 'w-3/5'} focus:w-full transition-all duration-200 py-1 outline-none rounded-sm text-gray-500 pl-8`} />
                            <HiOutlineSearch className='absolute left-2' color='gray' />
                            {
                                search && search.length > 0 && (
                                    <CgClose onClick={() => setSearch('')} color='gray' className='absolute right-2 cursor-pointer' />
                                )
                            }
                        </div>
                        <div className='w-full bg-white text-black rounded-b-md px-2 text-center absolute top-full overflow-auto'>
                            {search.length > 0 ? (
                                filteredSearch.slice(0, 10).map((houses: HouseData) => {
                                    return (
                                        <Link key={houses.id} className='text-xs gap-x-2 hover:bg-primaryPurple duration-200 transition flex flex-row items-center w-full p-2 hover:text-white' href={`/details/${houses.id}`}>
                                            <Image alt='Casa' src={houses.image} width={30} height={30} />{houses.address}, {houses.country}, ({houses.type})
                                        </Link>
                                    )
                                })
                            ) : (
                                null
                            )}
                        </div>
                    </div>

                    {!session ? (
                        <div className='hidden lg:flex flex-row items-center gap-x-4 font-roboto'>
                            <Link href='/auth/Signin'>
                                <Button className='text-white py-1 px-4'>
                                    Sign in
                                </Button>
                            </Link>
                            <Link href='/auth/Signup'>
                                <Button className='py-1 px-4 bg-primaryGreen rounded-sm hover:bg-primaryGreen/80 transition duration-200 text-white'>
                                    Sign up
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className='hidden lg:flex flex-row items-center gap-x-4 font-roboto'>
                            <Link href=''>
                                <Button onClick={() => signOut()} className='py-1 px-4 bg-primaryGreen rounded-sm hover:bg-primaryGreen/80 transition duration-200 text-white'>Sign Out</Button>
                            </Link>
                            <Link href='/profile'>
                                {session && session.user?.image ? (
                                    <img src={session.user.image} className='w-8 h-8 rounded-full' />
                                ) : (
                                    <div>
                                        <MdAccountCircle className='w-8 h-8'/>
                                    </div>
                                )}
                            </Link>
                        </div>
                    )}

                    <div className='flex-row items-center gap-x-4 lg:hidden flex'>
                        <button onClick={() => setSearchOpen(!isSearchOpen)}>
                            <HiOutlineSearch size={28} />
                        </button>
                        <div className='relative flex flex-row items-center'>
                            <button onClick={() => setMenuOpen(!isMenuOpen)} className='  hover:bg-violet-800 rounded-sm p-1 text-white transition duration-200 '>
                                <CgMenu size={28} />
                            </button>
                            {isMenuOpen ? (
                                <div className={`${isMenuOpen ? 'top-full' : '-top-20'} transition-all duration-200 absolute w-[240px] h-auto -right-full  bg-primaryPurple`}>
                                    <ul className='flex flex-col w-full p-2 gap-y-2'>
                                        {session ? (
                                            <div className='flex flex-col w-full gap-y-2'>
                                                <Link className='w-full border-b pb-2' href='/profile'> <Button fullWidth startIcon={<MdAccountCircle />} className=' hover:bg-violet-800 text-white'>Minha Conta</Button></Link>
                                                <Button startIcon={<BiLogOut />} onClick={() => signOut()} className='hover:bg-violet-800 text-white'>Sign Out</Button>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col w-full gap-y-2'>
                                                <Link className='w-full' href='/auth/Signin'><Button fullWidth startIcon={<BiLogIn />} className='hover:bg-violet-800 text-white'>Sign In</Button></Link>
                                                <Link className='w-full' href='/auth/Signup'><Button fullWidth startIcon={<BsPersonFillAdd />} className='hover:bg-violet-800 text-white'>Sign Up</Button></Link>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            ) : (
                                null
                            )}

                        </div>
                    </div>
                    {isSearchOpen ? (
                        <div className='absolute lg:hidden top-0 left-0 bg-white w-full h-full z-50 flex flex-row items-center'>
                            <div className='relative w-full h-full text-gray-400 flex flex-row items-center'>
                                <HiOutlineSearch className='absolute left-2' />
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className='w-full h-full outline-none pl-8' />
                                <CgClose onClick={() => { setSearch(''); setSearchOpen(false) }} className='absolute right-2 cursor-pointer' />
                                <div className='w-full absolute top-full flex flex-col px-2 bg-white gap-y-2'>
                                    {search.length > 0 && (
                                        filteredSearch.slice(0, 10).map((houses: HouseData) => {
                                            return (
                                                <Link key={houses.id} href={`/details/${houses.id}`} className='w-full flex flex-row items-center hover:bg-violet-800 p-2 hover:text-white transition duration-200 text-xs gap-x-2 text-primaryPurple'>
                                                    <Image src={houses.image} alt='Imagem da casa' width={30} height={30} /> {houses.address}, {houses.country} - ({houses.type})
                                                </Link>
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </header>
        </>
    )
}

export default Header