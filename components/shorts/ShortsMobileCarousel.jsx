
'use client'

import Carousel from "@components/Carousel"
import Counter from "@components/Counter"
import DownloadLink from "@components/DownloadLink"
import Image from "next/image"


const slides = [
    '/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_02.jpeg',
    '/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_01.jpeg',
    '/assets/images/VR_NFC_SHORTS/slide-show/SQUARE.png',
    '/assets/images/VR_NFC_SHORTS/slide-show/SQUARE2.png',
    '/assets/images/VR_NFC_SHORTS/slide-show/SQUARE3.png',
]


function ShortsMobileCarousel() {
  return (
    <div className="block lg:hidden m-4">
      <Carousel autoSlide={true} autoSlideInterval={3500}>
        {slides.map((s, i) => (
          <img src={s} key={i}/>
        ))}
      </Carousel>
      <br />
      <div style={{fontSize: '12px'}}>
        <p className='font-bold'>VR: NFC SHORTS</p> 
        <br />
        <p>       
           Say goodbye to forgetfulness and hello to efficiency with the VR NFC Shorts. Equipped with programmable NFC chips, these shorts put the power of customization in your hands. Originally designed to assist with memorizing daily tasks, the possibilities are endless. Whether it's setting reminders, accessing important information, or simplifying everyday tasks, the programmable NFC chip allows you to tailor your experience to suit your unique needs and preferences. Due to the comfort and breathability of the neoprene on skin these shorts can be worn in many conditions. 
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

export default ShortsMobileCarousel
