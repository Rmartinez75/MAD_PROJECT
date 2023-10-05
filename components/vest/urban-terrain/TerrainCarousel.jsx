
'use client'

import Carousel from "../../Carousel"


const slides = [
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square1.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square2.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square3.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square4.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/VR_URBAN_TERRAIN_1_06.jpeg',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/VR_URBAN_TERRAIN_1_07.jpeg',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/VR_URBAN_TERRAIN_1_05.jpeg',
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
