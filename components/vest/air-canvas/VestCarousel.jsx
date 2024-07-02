
'use client'

import Carousel from "../../Carousel"


const slides = [
  '/assets/images/VR_AIR_CANVAS/slide-show/VR_AIR_CANVAS_08z.webp',
  '/assets/images/VR_AIR_CANVAS/slide-show/VR_AIR_CANVAS_09z.webp',
  '/assets/images/VR_AIR_CANVAS/slide-show/VR_AIR_CANVAS_010z.webp',
]

function VestCarousel() {
  
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

export default VestCarousel
