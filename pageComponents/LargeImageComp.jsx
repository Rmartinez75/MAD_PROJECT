
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
    <div className="hidden lg:flex">
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default LargeImageComp