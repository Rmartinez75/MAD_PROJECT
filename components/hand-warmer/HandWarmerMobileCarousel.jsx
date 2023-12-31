
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
  '/assets/images/VR_HAND_WARMERS/square1.png',
  '/assets/images/VR_HAND_WARMERS/square4.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/square5_first.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/square5a.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/VR_HAND_WARMERS_04.jpeg',
  '/assets/images/VR_HAND_WARMERS/slide-show/VR_HAND_WARMERS_05.jpeg',
  ]


function HandWarmerMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR: HAND WARMER</p> 
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

export default HandWarmerMobileCarousel
