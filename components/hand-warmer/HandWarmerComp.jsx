
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from '../Counter'
import HandWarmerCarousel from './HandWarmerCarousel'
import DownloadLink from '@components/DownloadLink'
import HandWarmerMobileCarousel from './HandWarmerMobileCarousel'
import Link from 'next/link'

function HandWarmerComp() {
  return (
    <div id='hand-warmer-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
          <Link href={'/handWarmer'}>
            <img src='/assets/images/VR_HAND_WARMERS/square1.png' alt='VEST-1' className='w-[400px]'/>
          </Link>
        </div>       
        <div className='p-0.5'>
          <Link href={'/handWarmer'}>
            <img src='/assets/images/VR_HAND_WARMERS/square4.png' alt='VEST-2' className='w-[400px]' />
          </Link>
        </div>
        <div className='p-0.5 w-[404px]'>
          <HandWarmerCarousel />                
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR: SHEATH WARMER</p> <br />
              Whether you're braving the cold or simply seeking a little extra warmth on a chilly day, VR Sheath Warmer is  the perfect accessory for every occasion. Slip them on, feel the comforting embrace of warmth, and step confidently into the world, knowing that wherever you go, comfort and coziness are never far behind. Crafted with versatility in mind, the VR Sheath Warmer is more than just a fashion statement—it’s a practical solution to cold weather keeping your hands warm with a built in heat pad. With this technology being around for so long the main proposal was exploring how to make what already exists better. Exploring sewing techniques as well as embedded Fidlocks adds a unique twist allowing users to strap this sheath on to different parts of the body.  
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>   
      <div className='hidden lg:flex justify-between'>
        <div className=''>         
          <Image src='/assets/images/heatpad_B.png' alt='SHEATH SCHEMATICS' width={1000} height={500} />    
        </div>
      </div>
      <HandWarmerMobileCarousel />
      <br />
      <br />
    </div>
  )
}

export default HandWarmerComp
