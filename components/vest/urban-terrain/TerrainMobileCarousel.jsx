
'use client'

import Carousel from "../../Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
  '/assets/images/VR_URBAN_TERRAIN/VR_URBAN_TERRAIN_1_01.jpeg',
  '/assets/images/VR_URBAN_TERRAIN/VR_URBAN_TERRAIN_1_02.jpeg',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square1.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square2.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square3.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/square4.png',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/VR_URBAN_TERRAIN_1_06.jpeg',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/VR_URBAN_TERRAIN_1_07.jpeg',
  '/assets/images/VR_URBAN_TERRAIN/slide-show/VR_URBAN_TERRAIN_1_05.jpeg',
  ]


function TerrainMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR TERRAIN: 1S</p> 
        <br />
        <p>       
          VR Terrain 1S, a visionary concept design that blurs the lines between textiles  and cutting-edge technology. Inspired by the terrain of the city streets and the intricate circuits of a PCB board, this concept redefines the boundaries of textile design and wearable innovation, challenging the way technology should integrate with textiles being that both have their own constraints. This concept exemplifies the resolution of technology and how it can be conceived, like should the wires be visible and how can its visibility inform the textile?  
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

export default TerrainMobileCarousel
