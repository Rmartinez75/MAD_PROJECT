
'use client'

import '@styles/head-nav.css'
import Image from 'next/image'
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { AiOutlineMenu, AiTwotoneUpCircle } from "react-icons/ai";

function HeadNav() {

  const [open, setOpen] = useState(false)

    function showMenu (){
      setOpen(open => !open)
    }

  const [openDropDown, setDropDown] = useState(false)
  
      function showDropDown (){
        setDropDown(openDropDown => !openDropDown)
      }
  
  return (
    <div className='head-nav sticky top-0'>
      <div className='px-8 mx-auto'>
        <div className="flex lg:justify-between lg:items-center py-2">
         {/* LOGO */}
          <div className='company-name text-center'>
            <Link href={'/'} className='flex gap-2'><Image src='/assets/images/logo5.png' alt='LOGO' width={25} height={20} className='object-contain' /><p>Metaphysical Abstract Design</p></Link>
          </div>
          <div className='text-[#afaeae] space-x-10 pr-5 hidden md:flex mb-2'>            
            <div>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className='trigger flex bg-none right-side-nav'>Firm-Wear<ChevronDownIcon className='ml-1 mt-1' /></DropdownMenu.Trigger>
                <DropdownMenu.Content loop className='content text-[13px] mt-5 ml-[75px]'>
                  <DropdownMenu.Item className='item flex text-black mt-4 mb-4'><AiTwotoneUpCircle className='mr-4 mt-1 text-red-500' /><Link href={'/'}>Vest</Link></DropdownMenu.Item>
                  <DropdownMenu.Item className='item flex text-black mt-4 mb-4'><AiTwotoneUpCircle className='mr-4 mt-1 text-red-500' /><Link href={'/'}>Pants</Link></DropdownMenu.Item>
                  <DropdownMenu.Item className='item flex text-black mt-4 mb-4'><AiTwotoneUpCircle className='mr-4 mt-1 text-red-500' /><Link href={'/'}>Shorts</Link></DropdownMenu.Item>
                  <DropdownMenu.Item className='item flex text-black mt-4 mb-4'><AiTwotoneUpCircle className='mr-4 mt-1 text-red-500' /><Link href={'/'}>Hand Warmer</Link></DropdownMenu.Item>
                  <hr />
                  <DropdownMenu.Item className='item flex text-black pt-6 pb-6'><AiTwotoneUpCircle className='mr-4 mt-1 text-red-500' /><Link href={'/'}>Database</Link></DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>      
            </div>
            <Link href='/about' className='hover:text-white transition duration-300 right-side-nav' >About</Link>
            <span className='vertical-divider'>|</span>
            <Link href={'#'} className='hover:text-white transition duration-300 right-side-nav flex'>Cart<FaShoppingCart className='ml-3 mt-1' /></Link>
            <Link href={'#'} className='hover:text-white transition duration-300 right-side-nav flex'>Login<FaUserCircle className='ml-3 mt-1' /></Link> 
          </div>
        </div>
      </div>        
        {/* MOBILE BUTTON */}
      <div className='button md:hidden flex items-center justify-center z-10' onClick={showMenu}>
        <button><AiOutlineMenu size={20} className='text-[#afaeae] hover:text-white m-5 cursor-pointer mobile-menu-button' /></button> 
      </div>
      {/* MOBILE MENU */}
      <div className={ open ? '' : 'hidden'}>
      <div className='text-center text-[#afaeae] mobile-menu md:hidden'>
        <div>
          <Link href={'#'} className='block py-4 text-sm hover:text-white transition duration-300' onClick={showDropDown}>Firm-Wear</Link>
          <div className={ openDropDown ? '' : 'hidden'}>
            <div className='bg-[#d3cccc]'>
              <div className='hover:bg-gray-600'>
              <Link href={'/'}>Vest</Link>
              </div>
              <div className='hover:bg-gray-600'>
              <Link href={'/'}>Pants</Link>
              </div>
              <div className='hover:bg-gray-600'>
              <Link href={'/'}>Shorts</Link>
              </div>
              <div className='hover:bg-gray-600'>
              <Link href={'/'}>Hand Warmer</Link>
              </div>
            </div>
          </div>
        </div>
        <Link href={'/about'} className='block py-4 text-sm hover:text-white transition duration-300'>About</Link>
        <hr className='horizantal-divider'></hr>
        <Link href={'#'} className='block py-4 text-sm hover:text-white transition duration-300'>Cart<FaShoppingCart className='mx-auto mt-2' /></Link>
        <Link href={'#'} className='block py-4 text-sm hover:text-white transition duration-300'>Login<FaUserCircle className='mx-auto mt-2'/></Link>
        
        <br />
      </div>
      </div>    
    </div>
  )
}

export default HeadNav
