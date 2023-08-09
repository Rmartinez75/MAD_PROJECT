
import Image from 'next/image'
import '@styles/main-page.css'
import VestSchema from '@components/VestSchema'
import Counter from './Counter'

function VestComp() {
  return (
    
    <div id='vest-section'>      
      <div className='flex ml-2'>        
        <div className='p-1 rounded-xl'>
            <Image src='/assets/images/DSC_1047.jpg' alt='VEST-1' width={400} height={250} />
        </div>
        <div className='p-1 rounded-xl'>
            <Image src='/assets/images/DSC_1049.jpg' alt='VEST-2' width={400} height={250} />
        </div>
        <div className='p-1 rounded-xl'>
            <Image src='/assets/images/DSC_1051.jpg' alt='VEST-3' width={400} height={250} />
        </div>
        <div className='box-content h-auto w-4/12 pl-2'>
          <div className=''>
          The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>
      <div className='vest-schema-div' >
        <div>
          <br />
          <br />
          <br />
          <VestSchema />
        </div>
      </div>
    </div>
  )
}

export default VestComp
