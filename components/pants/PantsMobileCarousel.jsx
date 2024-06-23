
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
    '/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_01.jpeg',
    '/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_02_NEW.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_04.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_03.jpeg',
    '/assets/images/VR_THERMAL_PANTS/slide-show/VR_THERMAL_PANTS_05.jpeg',
]


function PantsMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR: THERMAL PANTS</p> 
        <br />
        <p>       
          Whether you're trekking through the wilderness or navigating the urban jungle, the VR Prototype Pants are your ultimate companion for long-distance travel. With the ability to monitor shifting environmental temperatures on the go, you can adapt and adjust your journey with ease, ensuring a seamless and comfortable experience from start to finish. Environmental temperature information is right at your fingertips. Seamlessly integrated LED lights embedded into the fabric provide real-time temperature readings, allowing you to stay informed and connected no matter where your adventures take you. Simply glance down and let the subtle colors guide you, eliminating the need for additional devices or distractions. Whether you're a seasoned explorer or simply seeking new experiences, these pants empower you to connect with your environment, adapt to changing conditions, and embrace the journey with confidence and style. So go ahead, step into a new terrain, and let your adventures begin.
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
            <Image src='/assets/images/schematicsMobile.png' alt='PANTS SCHEMATICS' width={1200} height={250} />    
       </div>
    </div>
  )
}

export default PantsMobileCarousel
