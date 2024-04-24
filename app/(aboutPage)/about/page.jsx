
import AP1 from "@public/assets/images/MAD_Images/AboutPage_1"
import AP2 from "@public/assets/images/MAD_Images/AboutPage_2"
import AP4 from "@public/assets/images/MAD_Images/AboutPage_4"

import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div style={{background: '#FFF3F3', fontSize: '12px'}}> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="flex justify-center">
        <div className="w-[250px]">
          <AP1 />
        </div>          
      </div>    
      <div className="flex justify-center mt-60"> 
        <div className="w-96">
            <p>VR: Virtual Reflection, A <br/>Metaphysical Abstract Design LLC Development Firm-Wear, Representing The People And Their Virtual Identity.</p>
        </div>
      </div>
      <div className="flex justify-center mt-60">
        <div className="w-[500px]">
          <AP2 />
        </div>
      </div>
      <div className="flex justify-center mt-60"> 
        <div className="w-[500px]">
            <p>Virtual Reflection intergrates textiles and technology. Install sensors and gain a <br/>broader comprehension of your surroundings and intern yourself.</p>
        </div>
      </div>
      <div className="flex justify-center mt-36">
        <div>
          <Image src='/assets/images/MAD_Images/About_Page_3.ai.svg' width={600} height={100} />
        </div>  
      </div>
      <div className="flex justify-center mt-20"> 
        <div className="w-[500px]">
            <p>Easily install or uninstall VR sensors. Installation manuals available for download</p>
        </div>
      </div> 
      <div className="flex justify-center mt-40">
        <div className="w-[500px]">
          <AP4 />
        </div>
      </div>
      <div className="flex justify-center mt-40"> 
        <div className="w-[500px]">
            <p>All around you there is information. Collect and analyze with VR Sensors.</p>
        </div>
      </div>
      <div className="flex justify-center text-center mt-40"> 
        <div className="w-[500px]">
            <Link href={''}><u>Sign up</u> for more.</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
      </div>
      {/* <div className="lg:hidden flex justify-center pt-40 pb-[164px] ">        
        <div style={{fontSize: 15, width: '23rem', textAlign: 'center'}} >
          <div className="flex justify-center"><Image src='/assets/images/about-image.png' alt="LOGO" width={100}   
            height={66} />
          </div>
          VR: Virtual Reflection, a brand under
          Metaphysical Abstract Design LLC,
          representing the people and their
          virtual identity.
        </div>
      </div>  
      <div className="hidden lg:flex justify-center pr-60 pt-72 pb-[250px] ">        
        <div style={{fontSize: 15, width: '39rem', textAlign: 'left'}} >
          <div className="flex justify-center"><Image src='/assets/images/about-image.png' alt="LOGO" width={200} 
            height={66} />
            <div className="ml-10 mt-3">
                VR: Virtual Reflection, a brand under
                Metaphysical Abstract Design LLC,
                representing the people and their
                virtual identity.
            </div>
          </div>            
        </div>
      </div> */}
    </div>
  )
}

export default page
