
'use client'

import Carousel from "../Carousel"
import Counter from "@components/Counter"
import Image from "next/image"


const slides = [
  '/assets/images/VR_AIR_CANVAS_07.jpeg',  
  '/assets/images/VR_AIR_CANVAS_06.jpeg',
  '/assets/images/VR_AIR_CANVAS_07.jpeg',
  '/assets/images/VR_AIR_CANVAS_06.jpeg',
  '/assets/images/VR_AIR_CANVAS_08.jpg',
]

function VestMobileCarousel() {
  
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR AIR CANVAS</p> <br />
        The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
        <br />
        <br />
        <Counter />
        </div>
        <div className='ml-10'>         
          <Image src='/assets/images/vest-schema.svg' alt='PANTS SCHEMATICS' width={800} height={500} />    
        </div>
    </div>
  )
}

export default VestMobileCarousel
