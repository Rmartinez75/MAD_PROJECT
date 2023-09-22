
'use client'

import Carousel from "../Carousel"


const slides = [
  '/assets/images/VR_URBAN_TERRAIN 1_07.jpeg',
  '/assets/images/VR_URBAN_TERRAIN 1_02.jpeg',
  '/assets/images/VR_URBAN_TERRAIN 1_01.jpeg',
]

function TerrainCarousel() {
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

export default TerrainCarousel
