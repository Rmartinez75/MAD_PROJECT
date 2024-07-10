
'use client'

import Carousel from '@components/Carousel'
import Image from 'next/image'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/1.webp',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/2.webp',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/3.webp',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/4.webp',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/5.webp',
]

const smallTopSlides = [
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE2/2.webp',
  ]

const smallBottomSlides = [
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE3/1.webp',
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
            <div className=''>         
              <Image src='/assets/images/NFC _c.png' alt='SHORTS SCHEMATICS' width={600} height={100} />    
            </div>
          </div>
        </div>
        <div className='w-auto ml-5 mr-10'>
          <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
            <p className="font-bold" style={{fontSize: '14px'}}>
              VR: NFC SHORTS
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Say goodbye to forgetfulness and hello to efficiency with the VR NFC Shorts. Equipped with programmable NFC chips, these shorts put the power of customization in your hands. Originally designed to assist with memorizing daily tasks, the possibilities are endless. Whether it's setting reminders, accessing important information, or simplifying everyday tasks, the programmable NFC chip allows you to tailor your experience to suit your unique needs and preferences. Due to the comfort and breathability of the neoprene on skin these shorts can be worn in many conditions. 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Synthetic Neoprene, Synthetic Leather, Neoprene  
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Flexible Textile NFC Tags NTAG212 30x30 mm
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

