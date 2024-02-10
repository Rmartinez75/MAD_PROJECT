
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/2.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/3.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/6.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/7.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/8.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/9.png',
]

const smallTopSlides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE2/square1.png',
  ]

const smallBottomSlides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE3/square2.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE3/square3.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE3/square4.png',
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
              This device was original designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings.
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

