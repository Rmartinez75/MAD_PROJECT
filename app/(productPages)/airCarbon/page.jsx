
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_AIR_CARBON/VR-AIR-CARBON/IMAGE1/1.webp',
  '/assets/images/VR_AIR_CARBON/VR-AIR-CARBON/IMAGE1/2.webp',
]

const largeImageSlides2 = [
  '/assets/images/VR_AIR_CARBON/VR-AIR-CARBON/IMAGE2/1.webp',
  '/assets/images/VR_AIR_CARBON/VR-AIR-CARBON/IMAGE2/2.webp',
]

const smallTopSlides = [
  '/assets/images/VR_AIR_CARBON/VR-AIR-CARBON/IMAGE3/1.webp',
  ]

const smallBottomSlides = [
  '/assets/images/VR_AIR_CARBON/VR-AIR-CARBON/IMAGE4/2.webp',
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
              VR AIR: CARBON
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
             The VR Air Carbon explores materiality in a whole new way. The effects of carbon on the environment is becoming more and more prevalent with each day. Environmental awareness is woven into the fabric- the patina-like texture Is more symbolic than it is functional representing the oxidation of carbon steel, a reminder that time is running out. Armed with real-time data and insights, you have the power to make informed decisions that benefit both yourself and the planet. From reducing indoor pollutants to advocating for cleaner air initiatives, every action you take makes a difference and you are reminded of this with each step.
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

