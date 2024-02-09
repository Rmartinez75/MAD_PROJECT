
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
              <Link href={''}>
                <Image src='/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_02.jpeg' alt='VEST-1' width={400} height={250} />
              </Link>
            </div>
            <div className='p-0.5 rounded-xl'>
              <Link href={''}>
                <Image src='/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_01.jpeg' alt='VEST-2' width={400} height={250} />
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
              The VR NFC shorts come with programmable NFC chips installed. Originally designed to assist individuals with memorizing daily tasks but not limited to just that. This programmable chip allows users to program themselves as needed in whatever way users find it convenient. Made entirely of synthetic neoprene these shorts are very comfortable on the skin and absorb sweat and moisture making it a great activewear. 
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
