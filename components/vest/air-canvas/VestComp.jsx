
import '@styles/main-page.css'
import Counter from '@components/Counter'
import VestCarousel from './VestCarousel'
import VestMobileCarousel from './VestMobileCarousel'
import VestSchematics from '@components/VestSchematics'
import Link from 'next/link'

function VestComp() {
  return (    
    <div id='vest-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='block'>
          <div className="flex">
            <div className='p-0.5'>
              <Link href={'/airCanvas'}>
                <img src='/assets/images/VR_AIR_CANVAS/VR_AIR_CANVAS_07.jpeg' alt='VEST-1' className='w-[400px]' />
              </Link>
            </div>       
            <div className='p-0.5'>
              <Link href={'/airCanvas'}>
                <img src='/assets/images/VR_AIR_CANVAS/VR_AIR_CANVAS_06.jpeg' alt='VEST-2' className='w-[400px]' />
              </Link>
            </div>
            <div className='p-0.5 w-[404px]'>
              <VestCarousel />                            
            </div>
          </div>
          <div className='hidden lg:flex mt-5 justify-between'>
            <VestSchematics />
          </div>
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR AIR: CANVAS</p> <br />
              Imagine, a returning astronaut coming home to a new world. The VR Air Canvas encompasses an astronaut styled off white canvas puffer with direct openings for sensor placement. Equipped with an environmental carbon sensor, VR Air Canvas offers a glimpse into the world around us. Accurate readings of indoor and outdoor environments provide invaluable insights, allowing you to navigate and connect with your surroundings like never before. Designed to adapt to individual preferences, it can be worn with or without compatible sensors, showcasing the exploration of heavy-duty cotton and its harmonious aging abilities alongside its integrated parts
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
