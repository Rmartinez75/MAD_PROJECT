
'use client'

import Carousel from '@components/Carousel'
import Image from 'next/image'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE1/1.png',
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE1/2.png',
]

const smallTopSlides = [
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE2/4.png',
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE2/5.png',
  ]

const smallBottomSlides = [
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE3/2.png',
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE3/4.jpeg',
  '/assets/images/VR_HAND_WARMERS/VR-SHEATH-WARMER/IMAGE3/5.jpeg',
  ]

function page() {
  return (
    <div className='flex justify-center items-center max-w-full'>
      <div className="flex min-w-0 max-w-full">
        <div className="block ml-10" style={{width: '75%'}}>
          <div className="flex">
            <div className="flex w-[900px] min-w-0">
              <div className='max-w-full mt-8'>
                <Carousel autoSlide={true} autoSlideInterval={8500}>
                  {largeImageSlides.map((s, i) => (
                    <img src={s} key={i} className="max-w-full"/>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="mt-8 ml-2 w-[319px]">
              <div>
                <div className='mb-2'>
                  <Carousel autoSlide={true} autoSlideInterval={8100}>
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
          <div className='lg:flex justify-between'>
            <div className=''>         
              <Image src='/assets/images/heatpad_B.png' alt='SHEATH SCHEMATICS' width={1000} height={500} />    
            </div>
          </div>
        </div>
        <div className='w-auto ml-5 mr-10'>
          <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
            <p className="font-bold" style={{fontSize: '14px'}}>
              VR: SHEATH WARMER
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Whether you're braving the cold or simply seeking a little extra warmth on a chilly day, VR Sheath Warmer is  the perfect accessory for every occasion. Slip them on, feel the comforting embrace of warmth, and step confidently into the world, knowing that wherever you go, comfort and coziness are never far behind. Crafted with versatility in mind, the VR Sheath Warmer is more than just a fashion statement—it’s a practical solution to cold weather keeping your hands warm with a built in heat pad. With this technology being around for so long the main proposal was exploring how to make what already exists better. Exploring sewing techniques as well as embedded Fidlocks adds a unique twist allowing users to strap this sheath on to different parts of the body.  
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Olive Green Faux Suede, Black Nylon, Neoprene 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              USB Powered Nickel Chromium Coil Heat pad 
            </p>
            <br />
            <br />
            <br />
            <div className='flex' style={{fontSize: '12px'}}>
              <p className='flex' style={{fontSize: '12px'}}>
                SIZE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; TYPE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; 
                <RegisterLink postLoginRedirectURL='/dashboard' className='flex'>
                    GET NOTIFIED:
                </RegisterLink>
                &#160;&nbsp; EMAIL HERE
              </p>              
            </div>
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

