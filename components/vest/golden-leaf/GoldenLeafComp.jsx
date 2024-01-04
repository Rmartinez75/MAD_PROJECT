
import Image from 'next/image'
import Counter from '@components/Counter'
import GoldenLeafCarousel from './GoldenLeafCarousel'
import DownloadLink from '@components/DownloadLink'
import GoldenLeafMobileCarousel from './GoldenLeafMobileCarousel'


function GoldenLeafComp() {
  return (
    <div id='vest-leaf-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_GOLDEN_LEAF/VR_GOLDEN_LEAF_05.jpeg' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_GOLDEN_LEAF/VR_GOLDEN_LEAF_08.jpeg' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            <GoldenLeafCarousel />                
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR: GOLDEN LEAF</p> <br />
              The VR golden leaf is a conceptual piece designed for gorilla warfare. This vest has the capacity to house plates inside and allows users to wear loosely for mobility or fitted depending on the situation. Fidlocks are used for easy strap and off mechanics.
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
      <GoldenLeafMobileCarousel />
    </div>
  )
}

export default GoldenLeafComp
