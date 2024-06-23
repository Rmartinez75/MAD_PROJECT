
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'
import { FaShoppingCart, FaUserCircle, FaRegRegistered } from "react-icons/fa";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/1.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/2.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/3.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/4.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/5.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/6.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE1/7.png',
]

const largeImageSlides2 = [
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/1.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/2.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/3.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/4.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/5.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/6.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE2/7.png',
]

const smallTopSlides = [
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE3/square1.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE3/square2.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE3/square3.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE3/square4.jpeg',
  ]

const smallBottomSlides = [
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE4/square4.png',
  '/assets/images/VR_URBAN_TERRAIN/VR-URBAN-TERRAIN/IMAGE4/square5.jpeg',
  ]

function page() {
  return (
    <div className='flex justify-center items-center max-w-full'>
      <div className="flex min-w-0 max-w-full">
        <div className="block ml-10" style={{width: '75%'}}>
          <div className="flex">
            <div className='flex max-w-[930px] min-w-0'>
              <div className="w-[465px] mt-8">
                <Carousel autoSlide={true} autoSlideInterval={9000}>
                  {largeImageSlides.map((s, i) => (
                    <img src={s} key={i} className="max-w-full"/>
                  ))}
                </Carousel>
              </div>
              <div className="w-[465px] mt-8 ml-2">
                <Carousel autoSlide={true} autoSlideInterval={10000}>
                  {largeImageSlides2.map((s, i) => (
                    <img src={s} key={i} className="max-w-full"/>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="mt-8 ml-2 w-[316px]">
              <div>
                <div className='mb-2'>
                  <Carousel autoSlide={true} autoSlideInterval={8250}>
                      {smallTopSlides.map((s, i) => (
                      <img src={s} key={i} className="max-w-full"/>
                      ))}
                  </Carousel>
                </div>
                <div>
                  <Carousel autoSlide={true} autoSlideInterval={8000}>
                      {smallBottomSlides.map((s, i) => (
                      <img src={s} key={i} className="max-w-full"/>
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-auto">
            <VestSchematics />
          </div>
        </div>
        <div className='w-auto ml-5 mr-10'>
          <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
            <p className="font-bold" style={{fontSize: '14px'}}>
              VR TERRAIN: 1S
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              VR Terrain 1S, a visionary concept design that blurs the lines between textiles  and cutting-edge technology. Inspired by the terrain of the city streets and the intricate circuits of a PCB board, this concept redefines the boundaries of textile design and wearable innovation, challenging the way technology should integrate with textiles being that both have their own constraints. This concept exemplifies the resolution of technology and how it can be conceived, like should the wires be visible and how can its visibility inform the textile?   
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Canvas, Paint, Black Cotton Canvas Inner
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <p style={{fontSize: '12px'}}>
              N/A
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              ARDUINO BLE<br />MCU 6050<br />RGB LED<br />ETC... 
            </p>
            <br />
            <br />
            <br />
            <div className='flex' style={{fontSize: '12px'}}>
              <RegisterLink postLoginRedirectURL='/dashboard' className='flex'>GET NOTIFIED:<FaRegRegistered className='ml-3 mt-1' />
              </RegisterLink>
            </div>
            {/* <p style={{fontSize: '12px'}}>SIZE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; TYPE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; GET NOTIFIED:&#160;&nbsp; EMAIL HERE</p> */}
            
            <br />
            <br />
            <p style={{fontSize: '12px'}}>DOWNLOAD OPTIONS: FOR OPEN SOURCE ADD EMAIL FOR DOWNLOAD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

