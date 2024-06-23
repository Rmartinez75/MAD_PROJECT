
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
    '/assets/images/VR_AIR_CARBON/DSC_0923_5.jpeg',
    '/assets/images/VR_AIR_CARBON/DSC_0923_2.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/DSC_0923_3.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/DSC_0923_4.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_01.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_02.jpeg',
    // '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_03.jpeg',
    // '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_04.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_05.jpeg',
  ]


function CarbonMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR VEST: AIR CARBON</p> 
        <br />
        <p>       
          The VR Air Carbon explores materiality in a whole new way. The effects of carbon on the environment is becoming more and more prevalent with each day. Environmental awareness is woven into the fabric- the patina-like texture Is more symbolic than it is functional representing the oxidation of carbon steel, a reminder that time is running out. Armed with real-time data and insights, you have the power to make informed decisions that benefit both yourself and the planet. From reducing indoor pollutants to advocating for cleaner air initiatives, every action you take makes a difference and you are reminded of this with each step.
        </p>
        <br />
        <br />
        <Counter />
        <br />
        <br />
        {/* <DownloadLink /> */}
        </div>
        <br />
        <br />
        <div>         
          <Image src='/assets/images/vest-schema.svg' alt='VEST SCHEMATICS' width={800} height={500} />    
       </div>
    </div>
  )
}

export default CarbonMobileCarousel
