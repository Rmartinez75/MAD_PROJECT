
import Image from "next/image"

const page = () => {
  return (
    <div className="flex lg:justify-end justify-center" style={{background: '#FFF3F3'}}>   
      <div className="lg:hidden flex justify-center pt-40 pb-[164px] ">        
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
      </div>
    </div>
  )
}

export default page
