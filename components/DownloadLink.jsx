
'use client'

import Image from "next/image";

const PDF_FILE = 'HTTP://localhost:3000/path1.pdf'

function DownloadLink() {

  const downloadFile = (url) => {
    const filename = url.split('/').pop();
    const aTag = document.createElement('a')
    aTag.href=url;
    aTag.setAttribute('download', filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className='flex'>
      <button onClick={()=>{downloadFile(PDF_FILE)}}><p className="lg:flex tracking-[.50em] text-[13px] lg:hover:text-[16px] text-red-700 text-bold"><p>[&nbsp;&nbsp;</p>Download Schematics<p>&nbsp;&nbsp;]</p></p></button> 
      {/* <br />
      <br />
      <img src="/assets/images/path1.png" alt="" className="w-[800px]"/> */}
    </div>
  )
}

export default DownloadLink
