
import Image from 'next/image'
import Counter from '../Counter'
import PantsCarousel from './PantsCarousel'
import PantsMobileCarousel from './PantsMobileCarousel'
import Link from 'next/link'

function PantsComp() {
  return (
    <div id='pants-section'>
      <div className='hidden lg:flex ml-3'> 
        <div className='block'>    
          <div className='flex'>          
            <div className='p-0.5 rounded-xl'>
              <Link href={'/thermalPants'}>
                <Image src='/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_01.webp' alt='PANTS-1' width={400} height={250} />
              </Link>
            </div>
            <div className='p-0.5 rounded-xl'>
              <Link href={'/thermalPants'}>
                <Image src='/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_02_NEW.webp' alt='PANTS-2' width={400} height={250} />
              </Link>
            </div>
            <div className='p-0.5 rounded-xl w-[404px]'>
                <PantsCarousel />
            </div> 
          </div>
          <div className='hidden lg:flex'>
            <div className='ml-16 mt-16'>         
              <Image src='/assets/images/pants-schema1.png' alt='PANTS SCHEMATICS' width={1100} height={250} />    
            </div>
          </div>
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%] mr-5' style={{fontSize: '12px'}}> 
            <p className='font-bold'>VR: THERMAL PANTS</p> <br />           
              Whether you're trekking through the wilderness or navigating the urban jungle, the VR Prototype Pants are your ultimate companion for long-distance travel. With the ability to monitor shifting environmental temperatures on the go, you can adapt and adjust your journey with ease, ensuring a seamless and comfortable experience from start to finish. Environmental temperature information is right at your fingertips. Seamlessly integrated LED lights embedded into the fabric provide real-time temperature readings, allowing you to stay informed and connected no matter where your adventures take you. Simply glance down and let the subtle colors guide you, eliminating the need for additional devices or distractions. Whether you're a seasoned explorer or simply seeking new experiences, these pants empower you to connect with your environment, adapt to changing conditions, and embrace the journey with confidence and style. So go ahead, step into a new terrain, and let your adventures begin.
          <br />
          <br />
          <Counter />                     
        </div>            
      </div>
      {/* <div className='hidden lg:flex'>
        <div className='ml-16 mt-16'>         
          <Image src='/assets/images/pants-schema1.png' alt='PANTS SCHEMATICS' width={1100} height={250} />    
        </div>
      </div> */}
      <PantsMobileCarousel />
    </div>
  )
}

export default PantsComp
