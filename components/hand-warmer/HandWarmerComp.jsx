
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from '../Counter'
import HandWarmerCarousel from './HandWarmerCarousel'
import DownloadLink from '@components/DownloadLink'
import HandWarmerMobileCarousel from './HandWarmerMobileCarousel'

function HandWarmerComp() {
  return (
    <div id='hand-warmer-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_HAND_WARMERS/square1.png' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_HAND_WARMERS/square4.png' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5 w-[404px]'>
            <HandWarmerCarousel />                
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR: SHEATH WARMER</p> <br />
              A wearable device. Originally designed as a sheath The VR hand warmers keeps your limbs warm 
            <br />
            <br />
            <Counter />
            </div>          
        </div>
      </div>     

      <div className='hidden lg:flex justify-between'>
        <div className=''>         
          <Image src='/assets/images/heatpad_B.png' alt='VEST SCHEMATICS' width={1000} height={500} />    
        </div>
        {/* <div className='flex items-center mr-[250px]'> 
          <DownloadLink />  
        </div> */}
      </div>
      <HandWarmerMobileCarousel />
      <br />
      <br />
    </div>
  )
}

export default HandWarmerComp
