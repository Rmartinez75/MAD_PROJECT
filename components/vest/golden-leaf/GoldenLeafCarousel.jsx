
'use client'

import Carousel from "../../Carousel"


const slides = [
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_01.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_02.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_03.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_06.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_07.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_09.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_010.jpeg',
  '/assets/images/VR_GOLDEN_LEAF/slide-show/VR_GOLDEN_LEAF_011.jpeg',
]

function GoldenLeafCarousel() {
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

export default GoldenLeafCarousel
