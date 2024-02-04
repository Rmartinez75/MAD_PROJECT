
'use client'

import Carousel from '@components/Carousel'
import Image from 'next/image'

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE1/1.png',
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE1/4.png',
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE1/8.png',
]

const smallTopSlides = [
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE2/1.png',
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE2/2.png',
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE2/3.jpeg',
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE2/4.jpeg',
  ]

const smallBottomSlides = [
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE3/1.jpeg',
  '/assets/images/VR_THERMAL_PANTS/VR-THERMAL-PANTS/IMAGE3/2.jpg',
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
          <div className='hidden lg:flex'>
            <div className='ml-5 mt-10'>         
              <Image src='/assets/images/pants-schema1.png' alt='PANTS SCHEMATICS' width={1100} height={250} />    
            </div>
          </div>
        </div>
        <div className='w-auto ml-5 mr-10'>
          <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
            <p className="font-bold" style={{fontSize: '14px'}}>
              VR: THERMAL PANTS
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              An environmental awareness device. The VR thermal is a prototype pant, the first of its kind, designed for mobility, comfort and efficiency. This device houses an environmental temperature reader with Bluetooth capabilities. With the VR prototype pants you can read environmental temperature information via your phones or from viewing the indicated color from the embedded led fitted into the pants which allows users to travel long distances and have an understanding of shifting temperatures without necessarily having to use a phone or any other device but their eyes. See specifications for additional information.
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

