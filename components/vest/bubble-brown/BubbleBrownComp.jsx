
import '@styles/main-page.css'
import Counter from '@components/Counter'
import BubbleBrownCarousel from './BubbleBrownCarousel'
import BubbleBrownMobileCarousel from './BubbleBrownMobileCarousel'
import VestSchematics from '@components/VestSchematics'
import Link from 'next/link'


function BubbleBrownComp() {
  return (
    <div id='vest-bubblebrown-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
          <Link href={'/bubbleBrown'}>
            <img src='/assets/images/VR_AIR_BUBBLE_BROWN/VR-AIR-BUBBLE-BROWN/IMAGE3/1.webp' alt='VEST-1' className='w-[400px]' />
          </Link>
        </div>       
        <div className='p-0.5'>
          <Link href={'/bubbleBrown'}>
            <img src='/assets/images/VR_AIR_BUBBLE_BROWN/VR-AIR-BUBBLE-BROWN/IMAGE3/2.webp' alt='VEST-2' className='w-[400px]' />
          </Link>
        </div>
        <div className='p-0.5 w-[404px]'>            
          <BubbleBrownCarousel />                            
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR: AIR EXPLORER</p> <br />
             Explore where no one else has, like no one else has with the VR Air Explorer. Users are able to enjoy comfort alongside ample storage space. The Explorer features a unique blend of nylon and suede. This device was designed for specialty sensors that may be bigger in size or require a bigger storage as well as external access making installation a lot easier. Install and begin your journey.  
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>
      <br />
      <div className='hidden lg:flex justify-between'>
        <VestSchematics />
      </div>

      <BubbleBrownMobileCarousel />
      
    </div>
  )
}

export default BubbleBrownComp
