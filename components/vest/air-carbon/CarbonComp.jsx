
import '@styles/main-page.css'
import Counter from '@components/Counter'
import CarbonCarousel from './CarbonCarousel'
import CarbonMobileCarousel from './CarbonMobileCarousel'
import VestSchematics from '@components/VestSchematics'
import Link from 'next/link'


function CarbonComp() {
  return (
    <div id='vest-aircarbon-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
          <Link href={'/airCarbon'}>
            <img src='/assets/images/VR_AIR_CARBON/DSC_0923_5.jpeg' alt='VEST-1' className='w-[400px]' />
          </Link>
        </div>       
        <div className='p-0.5'>
          <Link href={'/airCarbon'}>
            <img src='/assets/images/VR_AIR_CARBON/DSC_0923_2.jpeg' alt='VEST-2' className='w-[400px]' />
          </Link>
        </div>
        <div className='p-0.5 w-[404px]'>
          <CarbonCarousel />                            
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR AIR: CARBON</p> <br />
             The VR Air Carbon explores materiality in a whole new way. The effects of carbon on the environment is becoming more and more prevalent with each day. Environmental awareness is woven into the fabric- the patina-like texture Is more symbolic than it is functional representing the oxidation of carbon steel, a reminder that time is running out. Armed with real-time data and insights, you have the power to make informed decisions that benefit both yourself and the planet. From reducing indoor pollutants to advocating for cleaner air initiatives, every action you take makes a difference and you are reminded of this with each step.
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>
      <br />
      <div className='hidden lg:flex justify-between'>
        <VestSchematics />
      </div>
      <CarbonMobileCarousel />
    </div>
  )
}

export default CarbonComp
