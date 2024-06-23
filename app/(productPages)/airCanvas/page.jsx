
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE1/1.png',
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE1/2.png',
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE1/3.png',
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE1/4.png',
]

const largeImageSlides2 = [
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE2/1.png',
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE2/2.png',
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE2/3.png',
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE2/4.png',
]

const smallTopSlides = [
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE3/1.jpeg',
  ]

const smallBottomSlides = [
  '/assets/images/VR_AIR_CANVAS/VR-AIR-CANVAS/IMAGE4/2.jpeg',
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
              VR Air: CANVAS
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Imagine, a returning astronaut coming home to a new world. The VR Air Canvas encompasses an astronaut styled off white canvas puffer with direct openings for sensor placement. Equipped with an environmental carbon sensor, VR Air Canvas offers a glimpse into the world around us. Accurate readings of indoor and outdoor environments provide invaluable insights, allowing you to navigate and connect with your surroundings like never before. Designed to adapt to individual preferences, it can be worn with or without compatible sensors, showcasing the exploration of heavy-duty cotton and its harmonious aging abilities alongside its integrated parts
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
             Synthetic Neoprene, Cotton Canvas 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              ESP32<br/>
              SCD40<br/>
              Adafruit GPS Mini 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>SIZE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; TYPE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; GET NOTIFIED:&#160;&nbsp; EMAIL HERE</p>
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

