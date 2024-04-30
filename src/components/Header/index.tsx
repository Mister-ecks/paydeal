import React from 'react'
import Image from 'next/image'
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className='flex w-full justify-between items-center pt-[1.688rem] pb-[1.219rem] pl-[1.821rem] pr-[1.375rem] flex-wrap border-b border-white/70 md:px-[8.019rem] md:pt-4 md:pb-[1.524rem]'>
        <div className='flex-shrink-0'>
          <Image src="/assets/logo/MobileLogo.svg" className='block md:hidden' alt='Mobile Logo' width={75.93} height={19}/>
          <Image src="/assets/logo/DesktopLogo.svg" className='hidden md:block' alt='Desktop Logo' width={110} height={18}/>
        </div>

        <button className='block md:hidden'>
        <MdMenu className='text-white' size={24}/>
        </button>

        <div className='w-full md:w-auto hidden md:block' id="nav-content">
          <ul className='md:flex text-white text-lg md:space-x-[3.188rem]'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Offers</a>
            </li>
          </ul>
        </div>

        <button className='hidden md:block text-white text-lg border-2 border-white px-[1.25rem] py-[0.63rem] rounded-[0.625rem] font-medium'>
          Sign in
        </button>


      </header>
    </div>
  )
}

export default Header