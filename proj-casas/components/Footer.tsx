import Link from 'next/link'
import React from 'react'
import { GiHouseKeys } from 'react-icons/gi'

const Footer = () => {
  return (
    <>
      <footer className='w-full flex flex-col bg-primaryPurple text-white  font-roboto'>
        <div className='w-5/6 mx-auto py-4 h-auto flex flex-col justify-between gap-y-4'>
          <div className='w-full flex flex-col items-center lg:items-baseline gap-y-4 lg:gap-y-0 lg:flex-row justify-between'>
            <Link href='/' className='text-4xl flex flex-row items-center text-primaryGreen font-semibold font-oswald'>
                <GiHouseKeys/><span className='text-white' >House Ads</span>.
            </Link >
            <div className='text-xs'>
              Copyright, 2023 - &copy; Todos os direitos reservados. 
            </div>
          </div>
          <div className='w-full text-center text-[12px]'>
            Feito com &hearts; por Augusto de Paula.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer