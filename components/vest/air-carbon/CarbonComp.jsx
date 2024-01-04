
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from '@components/Counter'
import CarbonCarousel from './CarbonCarousel'
import DownloadLink from '../../DownloadLink'
import CarbonMobileCarousel from './CarbonMobileCarousel'


function CarbonComp() {
  return (
    <div id='vest-aircarbon-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_CARBON/DSC_0923_5.jpeg' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_AIR_CARBON/DSC_0923_2.jpeg' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            <CarbonCarousel />
                            
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR AIR: CARBON</p> <br />
              This device was originally designed to house VR technologies and can accommodate other wearable technologies, with its access pockets and wire conduits, allowing users with the possibility of testing out their own ideas. The VR Air Carbon vest comes equipped with an environmental carbon sensor allowing users to get accurate indoor and outdoor readings. The unique patina like texture on the heavy cotton explores textile materially interpretation.
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
      <CarbonMobileCarousel />
    </div>
  )
}

export default CarbonComp
