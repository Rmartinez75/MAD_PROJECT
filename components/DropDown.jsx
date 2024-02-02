'use client'

import '@styles/head-nav.css'
import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { AiTwotoneUpCircle } from "react-icons/ai";

function DropDown() {
  return (
    <DropdownMenu.Root>
        <DropdownMenu.Trigger className='trigger flex bg-none left-side-nav'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-red-500' /> 
                Vest
            <ChevronDownIcon className='ml-1 mt-1' />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content loop className='content text-[13px] mt-5 ml-[75px]'>
        <DropdownMenu.Item className='item flex text-black mt-1 mb-4'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-[#28231d]' size={10} />
            <Link href={'/airCanvas'} className='hover:text-gray-500'>
                VR Air: Canvas
            </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-[#28231d]' size={10} /> 
            <Link href={'/bubbleBrown'} className='hover:text-gray-500'>
                VR Air: Bubble Brown
            </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-[#28231d]' size={10} />
            <Link href={'/airCarbon'} className='hover:text-gray-500'>
                VR Air: Carbon
            </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-[#28231d]' size={10} />
            <Link href={'/goldenLeaf'} className='hover:text-gray-500'>
                VR: Golden Leaf
            </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-[#28231d]' size={10} />
            <Link href={'/bubbleBlack'} className='hover:text-gray-500'>
                VR Air: Bubble Black
            </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className='item flex text-black mt-4'>
            <AiTwotoneUpCircle className='mr-4 mt-1 text-[#28231d]' size={10} />
            <Link href={'/urbanTerrain'} className='hover:text-gray-500'>
                VR Terrain: 1S
            </Link>
        </DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
    // <div>
    //     <DropdownMenu.Item className='item flex text-black mt-6 mb-4'>
    //         <Link href={'/airCanvas'} className='hover:text-gray-500'>
    //             VR Air: Canvas
    //         </Link>
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
    //         <Link href={'/bubbleBrown'} className='hover:text-gray-500'>
    //             VR Air: Bubble Brown
    //         </Link>
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
    //         <Link href={'/airCarbon'} className='hover:text-gray-500'>
    //             VR Air: Carbon
    //         </Link>
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
    //         <Link href={'/goldenLeaf'} className='hover:text-gray-500'>
    //             VR: Golden Leaf
    //         </Link>
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item className='item flex text-black mt-4 mb-4'>
    //         <Link href={'/bubbleBlack'} className='hover:text-gray-500'>
    //             VR Air: Bubble Black
    //         </Link>
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item className='item flex text-black mt-4'>
    //         <Link href={'/urbanTerrain'} className='hover:text-gray-500'>
    //             VR Terrain: 1S
    //         </Link>
    //     </DropdownMenu.Item>
    // </div>
  )
}

export default DropDown