
import '@styles/main-page.css'
import Counter from '@components/Counter'
import BubbleBlackCarousel from './BubbleBlackCarousel'
import BubbleBlackMobileCarousel from './BubbleBlackMobileCarousel'
import VestSchematics from '@components/VestSchematics'


function BubbleBlackComp() {
  return (
    <div id='vest-bubbleblack-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_BUBBLE_BLACK/square1.png' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_BUBBLE_BLACK/square2.png' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            
            <BubbleBlackCarousel />
                            
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR AIR: BUBBLE BLACK</p> <br />
              This device was original designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings.
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

      <BubbleBlackMobileCarousel />
      
    </div>
  )
}

export default BubbleBlackComp
