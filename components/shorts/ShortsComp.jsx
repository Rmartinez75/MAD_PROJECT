
import Image from 'next/image'
import Counter from '../Counter'
import ShortsCarousel from './ShortsCarousel'
import DownloadLink from '@components/DownloadLink'
import ShortsMobileCarousel from './ShortsMobileCarousel'
import Link from 'next/link'

function ShortsComp() {
  return (
    <div id='shorts-section'>      
      <div className='hidden lg:flex ml-3'> 
        <div className='block'>
          <div className='flex'>       
            <div className='p-0.5 rounded-xl'>
              <Link href={'nfcShorts'}>
                <Image src='/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_02.webp' alt='VEST-1' width={400} height={250} />
              </Link>
            </div>
            <div className='p-0.5 rounded-xl'>
              <Link href={'nfcShorts'}>
                <Image src='/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_01.webp' alt='VEST-2' width={400} height={250} />
              </Link>
            </div>
            <div className='p-0.5 rounded-xl w-[404px]'>
                <ShortsCarousel />
            </div>
          </div>
          <div className='hidden lg:flex'>
            <div className=''>         
              <Image src='/assets/images/NFC _c.png' alt='SHORTS SCHEMATICS' width={600} height={100} />    
            </div>
          </div>
        </div>        
        <div className='box-content h-auto w-1/4 ml-[5%] mr-5'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR: NFC SHORTS</p> 
            <br />
              Say goodbye to forgetfulness and hello to efficiency with the VR NFC Shorts. Equipped with programmable NFC chips, these shorts put the power of customization in your hands. Originally designed to assist with memorizing daily tasks, the possibilities are endless. Whether it's setting reminders, accessing important information, or simplifying everyday tasks, the programmable NFC chip allows you to tailor your experience to suit your unique needs and preferences. Due to the comfort and breathability of the neoprene on skin these shorts can be worn in many conditions.  
            <br />
            <br />
            <Counter />
          </div>       
        </div>
      </div>
      <br />
      {/* <div className='hidden lg:flex'>
        <div className=''>         
          <Image src='/assets/images/NFC_B.png' alt='SHORTS SCHEMATICS' width={600} height={100} />    
        </div>
      </div> */}
      <ShortsMobileCarousel />
      <br />
    </div>
  )
}

export default ShortsComp
