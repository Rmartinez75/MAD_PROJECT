
'use client'

import Carousel from "../components/Carousel"

const slides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE2/square1.png',
  ]

function SmallTopComp() {
  return (
    <div className="hidden lg:flex">
        <Carousel autoSlide={true} autoSlideInterval={2750}>
            {slides.map((s, i) => (
            <img src={s} key={i}/>
            ))}
        </Carousel>
    </div>
  )
}

export default SmallTopComp