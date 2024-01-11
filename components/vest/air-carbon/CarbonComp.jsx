
import '@styles/main-page.css'
import Counter from '@components/Counter'
import CarbonCarousel from './CarbonCarousel'
import CarbonMobileCarousel from './CarbonMobileCarousel'
import VestSchematics from '@components/VestSchematics'


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
          <div className='p-0.5 w-[404px]'>
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
        <VestSchematics />
      </div>
      <CarbonMobileCarousel />
    </div>
  )
}

export default CarbonComp
