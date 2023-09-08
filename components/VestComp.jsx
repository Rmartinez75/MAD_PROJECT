
import Image from 'next/image'
import '@styles/main-page.css'
import Counter from './Counter'

function VestComp() {
  return (    
    <div id='vest-section'>     
      <div className='flex w-auto ml-3'> 
      <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_AIR_CANVAS_06.jpeg' alt='VEST-1' width={400} height={250} />
        </div>       
        <div className='p-0.5 rounded-xl'>
            <Image src='/assets/images/VR_AIR_CANVAS_07.jpeg' alt='VEST-1' width={400} height={250} />
        </div>
        <div>
          <div className='p-0.5 rounded-xl second'>
              <Image src='/assets/images/VR_AIR_CANVAS_08.jpg' alt='VEST-2' width={400} height={250} />
          </div>
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR AIR CANVAS</p> <br />
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
    </div>
  )
}

export default VestComp
