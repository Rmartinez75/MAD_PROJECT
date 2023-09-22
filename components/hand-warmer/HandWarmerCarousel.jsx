
'use client'

import Carousel from "../Carousel"


const slides = [
  '/assets/images/VR_HAND_WARMERS_02.jpeg',
  '/assets/images/VR_HAND_WARMERS_01.jpeg',
  '/assets/images/VR_HAND_WARMERS_04.jpeg',
]

function HandWarmerCarousel() {
  return (
    <div>
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default HandWarmerCarousel
