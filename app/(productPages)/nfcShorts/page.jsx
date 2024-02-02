
'use client'

import Carousel from '@components/Carousel'
import Image from 'next/image'

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/1.png',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/2.png',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/3.png',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/4.png',
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE1/5.png',
]

const smallTopSlides = [
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE2/2.jpeg',
  ]

const smallBottomSlides = [
  '/assets/images/VR_NFC_SHORTS/VR-NFC-SHORTS/IMAGE3/1.jpeg',
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
              The VR NFC shorts come with programmable NFC chips installed. Originally designed to assist individuals with memorizing daily tasks but not limited to just that. This programmable chip allows users to program themselves as needed in whatever way users find it convenient. Made entirely of synthetic neoprene these shorts are very comfortable on the skin and absorb sweat and moisture making it a great activewear. 
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

