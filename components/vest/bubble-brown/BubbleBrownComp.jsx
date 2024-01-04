
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from '@components/Counter'
import BubbleBrownCarousel from './BubbleBrownCarousel'
import DownloadLink from '../../DownloadLink'
import BubbleBrownMobileCarousel from './BubbleBrownMobileCarousel'


function BubbleBrownComp() {
  return (
    <div id='vest-bubblebrown-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_01.jpeg' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_02.jpeg' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            
            <BubbleBrownCarousel />
                            
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR AIR: BUBBLE BROWN</p> <br />
              A wearable device. This device was originally designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings.
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
        {/* <div className='flex items-center mr-[250px]'> 
          <DownloadLink />  
        </div> */}
      </div>

      <BubbleBrownMobileCarousel />
      
    </div>
  )
}

export default BubbleBrownComp
