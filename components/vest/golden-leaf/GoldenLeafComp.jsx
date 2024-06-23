
import Counter from '@components/Counter'
import GoldenLeafCarousel from './GoldenLeafCarousel'
import GoldenLeafMobileCarousel from './GoldenLeafMobileCarousel'
import Link from 'next/link'

function GoldenLeafComp() {
  return (
    <div id='vest-leaf-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
          <Link href={'/goldenLeaf'}>
            <img src='/assets/images/VR_GOLDEN_LEAF/VR_GOLDEN_LEAF_05.jpeg' alt='VEST-1' className='w-[400px]' />
          </Link>
        </div>       
        <div className='p-0.5'>
          <Link href={'/goldenLeaf'}>
            <img src='/assets/images/VR_GOLDEN_LEAF/VR_GOLDEN_LEAF_08.jpeg' alt='VEST-2' className='w-[400px]' />
          </Link>
        </div>
        <div className='p-0.5 w-[404px]'>
          <GoldenLeafCarousel />                
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR: GOLDEN LEAF</p> <br />
              Experience the perfect balance of freedom and security with the VR Golden Leaf. Designed to accommodate plates for enhanced protection, this vest offers unparalleled versatility, allowing users to wear it loosely for maximum mobility or fitted for optimal defense, depending on the situation. With the ability to adapt on the fly, warriors can move with confidence, knowing they're prepared for whatever comes their way. VR Golden Leaf features Fidlock technology for easy strap-on and off mechanics. With a simple flick of the wrist, users can secure their vest in place or remove it in a matter of seconds, ensuring swift transitions and uninterrupted focus on the mission at hand. This concept was one of the first attempts to design a product that balances the stiffness of a “technology” and the loosenest of fabric, layout and placement being key in the process. Additionally understanding how technology can be present without the need for electricity for power but purely through the adaptability of the product. 
          <br />
          <br />
          <Counter />            
          </div>          
        </div>
      </div>    
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='hidden lg:flex justify-between'>
      </div>
      <GoldenLeafMobileCarousel />
    </div>
  )
}

export default GoldenLeafComp
