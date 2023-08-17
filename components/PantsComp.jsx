
import Image from 'next/image'
import Counter from './Counter'

function PantsComp() {
  return (
    <div id='pants-section'>
      <div className='flex ml-2'> 
        <div className='box-content h-auto w-[425px] pr-[190px] ml-2' style={{fontSize: '14px'}}>            
            The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
            <br />
            <br />
            <Counter />                     
        </div>       
            <div className='p-0.5 rounded-xl'>
                <Image src='/assets/images/DSC_0099.jpeg' alt='VEST-1' width={400} height={250} />
            </div>
            <div className='p-0.5 rounded-xl'>
                <Image src='/assets/images/DSC_0116.jpeg' alt='VEST-2' width={400} height={250} />
            </div>
            <div className='p-0.5 rounded-xl'>
                <Image src='/assets/images/DSC_0110.jpeg' alt='VEST-3' width={400} height={250} />
            </div>            
        </div>
        <div className='flex justify-end' >
            <div>
            <Image src='/assets/images/pants-schema.png' alt='PANTS SCHEMATICS' width={1200} height={250} />
        </div>
      </div>
    </div>
  )
}

export default PantsComp
