
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
  '/assets/images/VR_AIR_CANVAS/VR_AIR_CANVAS_07.jpeg',
  '/assets/images/VR_AIR_CANVAS/VR_AIR_CANVAS_06.jpeg',
  '/assets/images/VR_AIR_CANVAS/slide-show/VR_AIR_CANVAS_08z.jpeg',
  '/assets/images/VR_AIR_CANVAS/slide-show/VR_AIR_CANVAS_09z.jpeg',
  '/assets/images/VR_AIR_CANVAS/slide-show/VR_AIR_CANVAS_010z.jpeg',
]


function VestMobileCarousel() {
  
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR VEST: AIR CANVAS</p> 
        <br />
        <p>       
          Imagine, a returning astronaut coming home to a new world. The VR Air Canvas encompasses an astronaut styled off white canvas puffer with direct openings for sensor placement. Equipped with an environmental carbon sensor, VR Air Canvas offers a glimpse into the world around us. Accurate readings of indoor and outdoor environments provide invaluable insights, allowing you to navigate and connect with your surroundings like never before. Designed to adapt to individual preferences, it can be worn with or without compatible sensors, showcasing the exploration of heavy-duty cotton and its harmonious aging abilities alongside its integrated parts
        </p>
        <br />
        <br />
        <Counter />
        <br />
        <br />
        {/* <DownloadLink /> */}
        </div>
        <br />
        <br />
        <div>         
          <Image src='/assets/images/vest-schema.svg' alt='VEST SCHEMATICS' width={800} height={500} />    
       </div>
    </div>
  )
}

export default VestMobileCarousel
