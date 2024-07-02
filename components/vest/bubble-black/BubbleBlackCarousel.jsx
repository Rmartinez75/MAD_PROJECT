
'use client'

import Carousel from "../../Carousel"

const slides = [
    '/assets/images/VR_AIR_BUBBLE_BLACK/slide-show/square3.webp',
    '/assets/images/VR_AIR_BUBBLE_BLACK/slide-show/square4.webp',
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
