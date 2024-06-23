
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
    '/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE2/3.png',
    '/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_01.jpeg',
    '/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_02.jpeg',
  ]

function BubbleBlackMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR: AIR EXPLORER</p> 
        <br />
        <p>       
          Explore where no one else has, like no one else has with the VR Air Explorer. Users are able to enjoy comfort alongside ample storage space. The Explorer features a unique blend of nylon and suede. This device was designed for specialty sensors that may be bigger in size or require a bigger storage as well as external access making installation a lot easier. Install and begin your journey. 
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

export default BubbleBlackMobileCarousel
