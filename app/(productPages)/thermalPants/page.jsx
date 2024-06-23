
'use client'

import Carousel from '@components/Carousel'
import Image from 'next/image'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

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
              Whether you're trekking through the wilderness or navigating the urban jungle, the VR Prototype Pants are your ultimate companion for long-distance travel. With the ability to monitor shifting environmental temperatures on the go, you can adapt and adjust your journey with ease, ensuring a seamless and comfortable experience from start to finish. Environmental temperature information is right at your fingertips. Seamlessly integrated LED lights embedded into the fabric provide real-time temperature readings, allowing you to stay informed and connected no matter where your adventures take you. Simply glance down and let the subtle colors guide you, eliminating the need for additional devices or distractions. Whether you're a seasoned explorer or simply seeking new experiences, these pants empower you to connect with your environment, adapt to changing conditions, and embrace the journey with confidence and style. So go ahead, step into a new terrain, and let your adventures begin.
            </p>
            <br />
            <br />
            <br />
            <p>
              SPECIFICATIONS:
            </p>
            <br />
            <ul style={{fontSize: '12px'}}>
              <li>
                &bull;
                <p style={{textIndent: '25px'}}>
                  Integrated LED Lights: Embedded LED lights discreetly fitted into the pants provide real-time temperature readings.
                </p>
              </li>
              <li>
                &bull;Smartphone Compatibility: Sync with your smartphone for additional temperature data and customization options.
              </li>
              <li>
                &bull;Premium Materials: Crafted from high-quality fabrics for durability, comfort, and style.
              </li>
              <li>
                &bull;Lightweight and Breathable: Designed for long-distance travel, these pants offer comfort and breathability.
              </li>
              <li>
                &bull;Adjustable Fit: Elastic waistband and adjustable snap studs ensure a perfect fit for all body types.
              </li>
              <li>
                &bull;Easy Care: Machine washable for convenient maintenance and long-lasting wear.
              </li>
            </ul>
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
             Synthetic Neoprene, Nylon
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Arduino nano 33 IoT<br/>
              MPL3115A2 - Barometric Pressure/Altitude/Temperature Sensor<br/>
              RGB LED<br/>
              Rechargeable battery power  
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

