
'use client'

import Carousel from "../components/Carousel"

const slides = [
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE3/square2.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE3/square3.png',
  '/assets/images/VR_AIR_BUBBLE_BLACK/VR-AIR-BUBBLE-BLACK/IMAGE3/square4.png',
  ]

function SmallBottomComp() {
  return (
    <div className="hidden lg:flex">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
            {slides.map((s, i) => (
            <img src={s} key={i}/>
            ))}
        </Carousel>
    </div>
  )
}

export default SmallBottomComp