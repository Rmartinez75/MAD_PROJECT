
import '@styles/main-page.css'
import Counter from '@components/Counter'
import VestCarousel from './VestCarousel'
import VestMobileCarousel from './VestMobileCarousel'
import VestSchematics from '@components/VestSchematics'

function VestComp() {
  return (    
    <div id='vest-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='block'>
          <div className="flex">
            <div className='p-0.5'>
              <img src='/assets/images/VR_AIR_CANVAS/VR_AIR_CANVAS_07.jpeg' alt='VEST-1' className='w-[400px]' />
            </div>       
            <div className='p-0.5'>
              <img src='/assets/images/VR_AIR_CANVAS/VR_AIR_CANVAS_06.jpeg' alt='VEST-2' className='w-[400px]' />
            </div>
            <div className='p-0.5 w-[404px]'>
              <VestCarousel />                            
            </div>
          </div>
          <div className='hidden lg:flex justify-between'>
            <VestSchematics />
          </div>
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR AIR: CANVAS</p> <br />
              A wearable device. This device was originally designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings. The Air Canvas is a versatile heavy duty vest. As with most VR products this vest is designed to be worn with or without compatible wearable tech. This canvas cotton bubble vest explores the feasibility of heavy duty cotton and its ability to age at a congruent rate with its integrated parts.
            <br />
            <br />
            <Counter />
          </div>          
        </div>
      </div>
      <br />
      {/* <div className='hidden lg:flex justify-between'>
        <VestSchematics />
      </div> */}
      <VestMobileCarousel />
    </div>
  )
}

export default VestComp
