
'use client'

import Carousel from "../Carousel"


const slides = [
  '/assets/images/VR_AIR_CANVAS_07.jpeg',
  '/assets/images/VR_AIR_CANVAS_06.jpeg',
  '/assets/images/VR_AIR_CANVAS_08.jpg',
]

function VestCarousel() {
  
  return (
    <div className='box-content h-auto w-[350px]'>
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default VestCarousel
