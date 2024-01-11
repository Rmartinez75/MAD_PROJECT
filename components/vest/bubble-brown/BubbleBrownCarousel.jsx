
'use client'

import Carousel from "../../Carousel"


const slides = [
    '/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE2/3.png',
    '/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_01.jpeg',
    '/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_02.jpeg',
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
