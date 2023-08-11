
import Image from "next/image"

const page = () => {
  return (
    <div style={{background: '#FFF3F3'}}>
      
      <div className="flex justify-center pt-40 pb-[164px] ">
        
          <div style={{fontSize: 15, width: '23rem', textAlign: 'center'}} >
            <div className="flex justify-center"><Image src='/assets/images/g42.png' alt="LOGO" width={90} height={66} />
            </div>Virtual Reflection (VR) originated as an idea of developing a coherent tool that would bridge the gap between our physical and virtual realities. This tool progressively became a soft and flexible technology through integrating techniques using textiles as its bases. The finish products are a unique and balanced blend of intricate sewing and methodic technology placements, transparency being the key.</div>
      </div>

    </div>
  )
}

export default page
