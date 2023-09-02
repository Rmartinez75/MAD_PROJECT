
import Image from 'next/image'
import Counter from './Counter'

function ShortsComp() {
  return (
    <div id='shorts-section'>
      <div className='flex w-auto ml-2'>        
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_NFC_SHORTS_02.jpeg' alt='VEST-1' width={400} height={250} />
        </div>
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_NFC_SHORTS_01.jpeg' alt='VEST-2' width={400} height={250} />
        </div>
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_NFC_SHORTS_02.jpeg' alt='VEST-3' width={400} height={250} />
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%] mr-5'>
          <div style={{fontSize: '12px'}}>
          <p className='font-bold'>VR NFC SHORTS</p> <br />
          The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>
      <div>
        <div>          
          <br />
          <Image src='/assets/images/vest-schema.svg' alt='PANTS SCHEMATICS' width={800} height={500} className='pl-10' />
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default ShortsComp
