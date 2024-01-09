
import Image from 'next/image'
import Counter from '../Counter'
import PantsCarousel from './PantsCarousel'
import PantsMobileCarousel from './PantsMobileCarousel'

function PantsComp() {
  return (
    <div id='pants-section'>
      <div className='hidden lg:flex ml-3'>               
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_01.jpeg' alt='PANTS-1' width={400} height={250} />
        </div>
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_THERMAL_PANTS/VR_THERMAL_PANTS_02_NEW.jpeg' alt='PANTS-2' width={400} height={250} />
        </div>
        <div className='p-0.5 rounded-xl'>
            <PantsCarousel />
        </div> 
        <div className='box-content h-auto w-1/4 ml-[5%] mr-5' style={{fontSize: '12px'}}> 
            <p className='font-bold'>VR: THERMAL PANTS</p> <br />           
            An environmental awareness device. The VR thermal is a prototype pant, the first of its kind, designed for mobility, comfort and efficiency. This device houses an environmental temperature reader with Bluetooth capabilities. With the VR prototype pants you can read environmental temperature information via your phones or from viewing the indicated color from the embedded led fitted into the pants which allows users to travel long distances and have an understanding of shifting temperatures without necessarily having to use a phone or any other device but their eyes. See specifications for additional information.
          <br />
          <br />
          <Counter />                     
        </div>            
      </div>
      <div className='hidden lg:flex justify-between'>
        <div>         
          <Image src='/assets/images/pants-schema.png' alt='PANTS SCHEMATICS' width={1200} height={250} />    
        </div>
      </div>
      <PantsMobileCarousel />
    </div>
  )
}

export default PantsComp
