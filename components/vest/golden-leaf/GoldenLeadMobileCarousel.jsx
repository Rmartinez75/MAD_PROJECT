
'use client'

import Carousel from "../../Carousel"
import Counter from "@components/Counter"
import Image from "next/image"


const slides = [
  '/assets/images/VR_GOLDEN_LEAF/VR_GOLDEN_LEAF_05.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/VR_GOLDEN_LEAF_08.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_01.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_02.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_03.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_06.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_07.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_09.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_010.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_011.jpeg',
]

function GoldenLeadMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR VEST: GOLDEN LEAF</p> 
        <br />
        <p>       
        The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
        </p>
        <br />
        <br />
        <Counter />
        </div>
        <br />
        <br />
        <div>         
          <Image src='/assets/images/vest-schema.svg' alt='VEST SCHEMATICS' width={800} height={500} />    
       </div>
    </div>
  )
}

export default GoldenLeadMobileCarousel
