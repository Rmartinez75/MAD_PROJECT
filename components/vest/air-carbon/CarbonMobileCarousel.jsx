
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
        The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
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
