
'use client'

import Carousel from "../Carousel"


const slides = [
  '/assets/images/VR_HAND_WARMERS/slide-show/square5_first.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/square5a.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/VR_HAND_WARMERS_04.jpeg',
  '/assets/images/VR_HAND_WARMERS/slide-show/VR_HAND_WARMERS_05.jpeg',
]

function HandWarmerCarousel() {
  return (
    <div>
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default HandWarmerCarousel
