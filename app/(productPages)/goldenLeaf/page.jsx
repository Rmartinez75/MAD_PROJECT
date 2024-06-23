
'use client'

import Carousel from '@components/Carousel'
import VestSchematics from '@components/VestSchematics'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import '@styles/pages.css'

const largeImageSlides = [
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE1/1.png',
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE1/2.png',
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE1/3.png',
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE1/4.png',
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE1/5.png',
]

const smallTopSlides = [
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE2/1.jpeg',
  ]

const smallBottomSlides = [
  '/assets/images/VR_GOLDEN_LEAF/VR-GOLDEN-LEAF/IMAGE3/2.jpeg',
  ]

function page() {
  return (
    <div className='flex justify-center items-center max-w-full'>
      <div className="flex min-w-0 max-w-full">
        <div className="block ml-10" style={{width: '75%'}}>
          <div className="flex">
            <div className="flex w-[900px] min-w-0">
              <div className="max-w-full mt-8">
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
              VR: GOLDEN LEAF
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              DESCRIPTION
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Experience the perfect balance of freedom and security with the VR Golden Leaf. Designed to accommodate plates for enhanced protection, this vest offers unparalleled versatility, allowing users to wear it loosely for maximum mobility or fitted for optimal defense, depending on the situation. With the ability to adapt on the fly, warriors can move with confidence, knowing they're prepared for whatever comes their way. VR Golden Leaf features Fidlock technology for easy strap-on and off mechanics. With a simple flick of the wrist, users can secure their vest in place or remove it in a matter of seconds, ensuring swift transitions and uninterrupted focus on the mission at hand. This concept was one of the first attempts to design a product that balances the stiffness of a “technology” and the loosenest of fabric, layout and placement being key in the process. Additionally understanding how technology can be present without the need for electricity for power but purely through the adaptability of the product. 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TEXTILE
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              Nylon/Felt With Black Cotton Lining, Orange Nylon Webbing Strap 
            </p>
            <br />
            <br />
            <br />
            <p style={{fontSize: '12px'}}>
              TECHNOLOGY 
            </p>
            <br />
            <p style={{fontSize: '12px'}}>
              N/A
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

