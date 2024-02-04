
'use client'

import Carousel from '@components/Carousel'
import Image from 'next/image'

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
      <div className="flex">
        <div className="block ml-10 w-auto">
          <div className="flex">
            <div className="w-[900px] mt-8">
              <Carousel autoSlide={true} autoSlideInterval={8500}>
                {largeImageSlides.map((s, i) => (
                  <img src={s} key={i} className="max-w-full"/>
                ))}
              </Carousel>
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
          <div className='hidden lg:flex justify-between'>
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
              A wearable device. Originally designed as a sheath The VR hand warmers keeps your limbs warm. 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Compact stretch nylon for warmth and comfort with a water resistant finish
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              ARDUINO BLE<br />MCU 6050<br />RGB LED<br />ETC... 
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

