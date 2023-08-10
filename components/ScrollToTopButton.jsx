
import Link from 'next/link'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import '@styles/scrollToTop.css'

function ScrollToTopButton() {
  return (
    <div className='button-div' id='progress'>
      <Link href='/' style={{textDecoration: 'none'}}><span className='button'><FaRegArrowAltCircleUp /></span></Link>      
    </div>
  )
}

export default ScrollToTopButton
