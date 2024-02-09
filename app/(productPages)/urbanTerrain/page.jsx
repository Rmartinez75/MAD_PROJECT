
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'

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
      <div className="flex">
        <div className="block ml-10 w-auto">
          <div className="flex">
          <div className='flex'>
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
            <div className="mt-8 ml-2 w-[319px]">
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
              A wearable device. This device was originally designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings. The front pouch pocket houses the power supply and can be used for additional storage. 
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

