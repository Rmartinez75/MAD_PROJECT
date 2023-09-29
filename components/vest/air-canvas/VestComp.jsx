
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from '@components/Counter'
import VestCarousel from './VestCarousel'
import DownloadLink from '../../DownloadLink'
import VestMobileCarousel from './VestMobileCarousel'

function VestComp() {
  return (    
    <div id='vest-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_CANVAS_07.jpeg' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_CANVAS_06.jpeg' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            <VestCarousel />
                            
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR: AIR CANVAS</p> <br />
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
        {/* <div className='mr-10'> 
          <DownloadLink />  
        </div>  */}
      </div>
      <VestMobileCarousel />
    </div>
  )
}

export default VestComp
