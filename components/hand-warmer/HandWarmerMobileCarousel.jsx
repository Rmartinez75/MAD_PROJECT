
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
  '/assets/images/VR_HAND_WARMERS/square1.png',
  '/assets/images/VR_HAND_WARMERS/square4.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/square5_first.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/square5a.png',
  '/assets/images/VR_HAND_WARMERS/slide-show/VR_HAND_WARMERS_04.jpeg',
  '/assets/images/VR_HAND_WARMERS/slide-show/VR_HAND_WARMERS_05.jpeg',
  ]


function HandWarmerMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR: SHEATH WARMER</p> 
        <br />
        <p>       
          Whether you're braving the cold or simply seeking a little extra warmth on a chilly day, VR Sheath Warmer is  the perfect accessory for every occasion. Slip them on, feel the comforting embrace of warmth, and step confidently into the world, knowing that wherever you go, comfort and coziness are never far behind. Crafted with versatility in mind, the VR Sheath Warmer is more than just a fashion statement—it’s a practical solution to cold weather keeping your hands warm with a built in heat pad. With this technology being around for so long the main proposal was exploring how to make what already exists better. Exploring sewing techniques as well as embedded Fidlocks adds a unique twist allowing users to strap this sheath on to different parts of the body. 
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

export default HandWarmerMobileCarousel
