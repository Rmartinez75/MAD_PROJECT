
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from '../Counter'
import HandWarmerCarousel from './HandWarmerCarousel'
import DownloadLink from '@components/DownloadLink'
import HandWarmerMobileCarousel from './HandWarmerMobileCarousel'

function HandWarmerComp() {
  return (
    <div id='hand-warmer-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_HAND_WARMERS/square1.png' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_HAND_WARMERS/square4.png' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            <HandWarmerCarousel />                
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR: HAND WARMER</p> <br />
            The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
            <br />
            <br />
            <Counter />
            </div>          
        </div>
      </div>     
      <br />
      <div className='hidden lg:flex justify-between'>
        <div className='ml-10'>         
          <Image src='/assets/images/vest-schema.svg' alt='VEST SCHEMATICS' width={800} height={500} />    
        </div>
        <div className='flex items-center mr-[250px]'> 
          <DownloadLink />  
        </div>
      </div>
      <HandWarmerMobileCarousel />
      <br />
      <br />
    </div>
  )
}

export default HandWarmerComp
