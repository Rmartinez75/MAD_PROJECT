
'use client'

import Carousel from "../Carousel"


const slides = [
    '/assets/images/VR_NFC_SHORTS/slide-show/SQUARE.png',
    '/assets/images/VR_NFC_SHORTS/slide-show/SQUARE2.png',
    '/assets/images/VR_NFC_SHORTS/slide-show/SQUARE3.png',
]

function ShortsCarousel() {
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

export default ShortsCarousel
