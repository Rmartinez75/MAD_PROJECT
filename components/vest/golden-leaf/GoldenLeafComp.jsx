
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
              <p className='font-bold'>VR VEST: GOLDEN LEAF</p> <br />
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
      <GoldenLeafMobileCarousel />
    </div>
  )
}

export default GoldenLeafComp
