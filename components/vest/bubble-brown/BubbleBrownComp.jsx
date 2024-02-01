
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
            <img src='/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_01.jpeg' alt='VEST-1' className='w-[400px]' />
          </Link>
        </div>       
        <div className='p-0.5'>
          <Link href={'/bubbleBrown'}>
            <img src='/assets/images/VR_AIR_BUBBLE_BROWN/IMAGE3/VR_AIR_BUBBLE_BROWN_02.jpeg' alt='VEST-2' className='w-[400px]' />
          </Link>
        </div>
        <div className='p-0.5 w-[404px]'>            
          <BubbleBrownCarousel />                            
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR AIR: BUBBLE BROWN</p> <br />
            A wearable device. This device was originally designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings. The front pouch pocket houses the power supply and can be used for additional storage. 
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
