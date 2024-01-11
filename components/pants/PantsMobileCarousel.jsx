
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
    '/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_01.jpeg',
    '/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_02_NEW.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_04.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_03.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_05.jpeg',
]


function PantsMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR: THERMAL PANTS</p> 
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
            <Image src='/assets/images/schematicsMobile.png' alt='PANTS SCHEMATICS' width={1200} height={250} />    
       </div>
    </div>
  )
}

export default PantsMobileCarousel
