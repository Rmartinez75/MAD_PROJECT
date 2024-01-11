
import Image from 'next/image'
import Counter from '../Counter'
import ShortsCarousel from './ShortsCarousel'
import DownloadLink from '@components/DownloadLink'
import ShortsMobileCarousel from './ShortsMobileCarousel'

function ShortsComp() {
  return (
    <div id='shorts-section'>
      <div className='hidden lg:flex ml-3'>        
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_02.jpeg' alt='VEST-1' width={400} height={250} />
        </div>
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_NFC_SHORTS/VR_NFC_SHORTS_01.jpeg' alt='VEST-2' width={400} height={250} />
        </div>
        <div className='p-0.5 rounded-xl w-[404px]'>
            <ShortsCarousel />
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%] mr-5'>
          <div style={{fontSize: '12px'}}>
          <p className='font-bold'>VR: NFC SHORTS</p> <br />
          The VR NFC shorts come with programmable NFC chips installed. Originally designed to assist individuals with memorizing daily tasks but not limited to just that. This programmable chip allows users to program themselves as needed in whatever way users find it convenient. Made entirely of synthetic neoprene these shorts are very comfortable on the skin and absorb sweat and moisture making it a great activewear. 
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>
      <br />
      <div className='hidden lg:flex justify-between'>
        <div className='ml-10'>         
          <Image src='/assets/images/shorts-schematics.svg' alt='SHORTS SCHEMATICS' width={600} height={100} />    
        </div>
        {/* <div className='flex items-center mr-[250px]'> 
          <DownloadLink />  
        </div> */}
      </div>
      <ShortsMobileCarousel />
      <br />
    </div>
  )
}

export default ShortsComp
