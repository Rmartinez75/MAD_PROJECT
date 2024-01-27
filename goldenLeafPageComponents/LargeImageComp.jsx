
'use client'

import Carousel from "../components/Carousel"

const slides = [
    '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/2.png',
    '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/3.png',
    '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/6.png',
    '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/7.png',
    '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/8.png',
    '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE1/9.png',
  ]

function LargeImageComp() {
  return (
    <div>
      <Carousel autoSlide={true} autoSlideInterval={5500}>
        {slides.map((s, i) => (
          <img src={s} key={i} className="max-w-full"/>
        ))}
      </Carousel>
    </div>
  )
}

export default LargeImageComp