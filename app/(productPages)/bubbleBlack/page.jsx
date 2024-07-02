
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE1/2.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE1/3.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE1/6.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE1/7.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE1/8.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE1/9.webp',
]

const smallTopSlides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE2/square1.webp',
  ]

const smallBottomSlides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE3/square2.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE3/square3.webp',
  '/assets/images/VR_AIR_BUBBLE_BLACK/IMAGE3/square4.webp',
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
          <div className="mt-5 w-auto">
            <VestSchematics />
          </div>
        </div>
        <div className='w-auto ml-5 mr-10'>
          <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
            <p className="font-bold" style={{fontSize: '14px'}}>
              VR AIR: BUBBLE BLACK
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              The VR Air Bubble Black was originally conceived as a housing for VR technologies. This versatile device goes beyond its initial purpose, offering users the freedom to experiment and innovate. Equipped with access pockets and wire conduits, it provides the perfect platform for testing out your own ideas and creations, whether it's integrating additional wearable technologies or developing groundbreaking new applications. Whether you're a developer or a curious enthusiast, this device offers endless opportunities for exploration and experimentation. From creating immersive experiences with sensors to monitoring environmental data.This is the first of the series of bubble vest designs and was originally to house and unhouse VR technologies. With no additional pockets and a low profile fit this is designed to be an addition to an attire.   
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Black Nylon, Gray Synthetic Neoprene Inner
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Varies
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

