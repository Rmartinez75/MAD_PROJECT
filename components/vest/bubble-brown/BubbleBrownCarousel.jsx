
'use client'

import Carousel from "../../Carousel"


const slides = [
    '/assets/images/VR_AIR_BUBBLE_BROWN/VR-AIR-BUBBLE-BROWN/IMAGE2/3.webp',
    '/assets/images/VR_AIR_BUBBLE_BROWN/VR-AIR-BUBBLE-BROWN/IMAGE3/1.webp',
    '/assets/images/VR_AIR_BUBBLE_BROWN/VR-AIR-BUBBLE-BROWN/IMAGE3/2.webp',
  ]

function BubbleBlackCarousel() {
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

export default BubbleBlackCarousel
