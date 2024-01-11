
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import Image from "next/image"


const slides = [
    '/assets/images/VR_AIR_CARBON/slide-show/DSC_0923_3.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/DSC_0923_4.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_01.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_02.jpeg',
    // '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_03.jpeg',
    // '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_04.jpeg',
    '/assets/images/VR_AIR_CARBON/slide-show/VR_AIR_CARBON_05.jpeg',
  ]

function CarbonCarousel() {
  return (
    <div className="hidden lg:flex">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default CarbonCarousel
