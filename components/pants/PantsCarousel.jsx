
'use client'

import Carousel from "../Carousel"


const slides = [
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_04.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_03.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_05.jpeg',
]

function PantsCarousel() {
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

export default PantsCarousel
