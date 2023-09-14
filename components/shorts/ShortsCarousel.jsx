
'use client'

import Carousel from "../Carousel"


const slides = [
    '/assets/images/VR_NFC_SHORTS_02.jpeg',
    '/assets/images/VR_NFC_SHORTS_01.jpeg',
    '/assets/images/VR_NFC_SHORTS_02.jpeg',
]

function ShortsCarousel() {
  return (
    <div className='w-[400px]'>
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default ShortsCarousel
