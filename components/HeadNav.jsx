
'use client'

import '@styles/head-nav.css'
import Image from 'next/image'
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function HeadNav() {

  const [open, setOpen] = useState(false)

    function showMenu (){
      setOpen(open => !open)
    }
  
  return (
    <div className='head-nav sticky top-0'>
      <div className='px-8 mx-auto'>
        <div className="flex justify-between items-center py-2">
         {/* LOGO */}
          <div className='company-name'>
            <Link href={'/'} className='flex gap-2'><Image src='/assets/images/logo5.png' alt='LOGO' width={25} height={20} className='object-contain' /><p>Metaphysical Abstract Design</p></Link>
          </div>
          <div className='text-[#afaeae] space-x-10 pr-5 hidden md:flex mb-2'>
            <Link href={'#'} className='hover:text-white transition duration-300 right-side-nav' >Firm-Wears</Link>
            <Link href='/about' className='hover:text-white transition duration-300 right-side-nav' >About</Link>
            <span className='vertical-divider'>|</span>
            <Link href={'#'} className='hover:text-white transition duration-300 right-side-nav flex'>Cart<FaShoppingCart className='ml-3 mt-1' /></Link>
            <Link href={'#'} className='hover:text-white transition duration-300 right-side-nav flex'>Login<FaUserCircle className='ml-3 mt-1' /></Link> 
          </div>
        </div>
      </div>        
        {/* MOBILE BUTTON */}
      <div className='button md:hidden flex items-center justify-center z-10' onClick={showMenu}>
        <button><AiOutlineMenu size={20} className='text-[#afaeae] m-5 cursor-pointer mobile-menu-button' /></button> 
      </div>
      {/* MOBILE MENU */}
      <div className={ open ? '' : 'hidden'}>
      <div className='text-center text-[#afaeae] mobile-menu md:hidden'>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>Firm-Wear</Link>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>About</Link>
        <hr className='horizantal-divider'></hr>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>Cart<FaShoppingCart className='mx-auto mt-2' /></Link>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>Login<FaUserCircle className='mx-auto mt-2'/></Link>
        
        <br />
      </div>
      </div>
    </div>
  )
}

export default HeadNav
