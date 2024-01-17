
import '@styles/pages.css'
import LargeImageComp from "@pageComponents/LargeImageComp"
import SmallBottomComp from "@pageComponents/SmallBottomComp"
import SmallTopComp from "@pageComponents/SmallTopComp"
import VestSchematics from '@components/VestSchematics'

function page() {
  return (
    <div className="pages">
      <div className="flex justify-center">
        <div className="block w">
          <div className="flex">
            <div className="mt-8 mb-2">
              <div className='w-[900px]'>
              <LargeImageComp />  
              </div>        
            </div>
            <div className="mt-8 ml-2 w-[319px]">
              <div className='mb-[10px]'>
                <SmallTopComp />
              </div>
              <div>
                <SmallBottomComp />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <VestSchematics />
          </div>
        </div>
        <div className="ml-6 mr-2 mt-8 w-[525px]" style={{ height: '600px', overflow: 'scroll'}}>
          <p className="font-bold" style={{fontSize: '14px'}}>
            VR: AIRVEST
          </p>
          <br />
          <p style={{fontSize: '12px'}}>
            DESCRIPTION
          </p>
          <br />
          <p style={{fontSize: '12px'}}>
            The Virtual Reflection Air Vest is a wearable technology device designed by Metaphysical Abstract Design. This device was originally designed to house VR technologies. It can easily accommodate other wearable technologies with its access pockets and wire conduits, allowing users to use this vest as a prototype for their own ideas. The VR Air Vest comes equipt with an environmental carbon sensor enabling users to access both indoor and outdoor carbon levels. When you put on a VR Air Vest your data counts. You gain access to a community of data by users just like you around the world.
          </p>
          <br />
          <br />
          <br />
          <p style={{fontSize: '12px'}}>
            TEXTILE
          </p>
          <br />
          <p style={{fontSize: '12px'}}>
            Compact stretch nylon for warmth and comfort with a water resistant finish
          </p>
          <br />
          <br />
          <br />
          <p style={{fontSize: '12px'}}>
            TECHNOLOGY 
          </p>
          <br />
          <p style={{fontSize: '12px'}}>
            ARDUINO BLE<br />MCU 6050<br />RGB LED<br />ETC... 
          </p>
          <br />
          <br />
          <br />
          <p style={{fontSize: '12px'}}>SIZE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; TYPE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; GET NOTIFIED:&#160;&nbsp; EMAIL HERE</p>
          <br />
          <br />
          <p style={{fontSize: '12px'}}>DOWNLOAD OPTIONS: FOR OPEN SOURCE ADD EMAIL FOR DOWNLOAD</p>
        </div>
      </div>
    </div>
  )
}

export default page