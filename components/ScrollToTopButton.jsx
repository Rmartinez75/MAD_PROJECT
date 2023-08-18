
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import '@styles/scrollToTop.css'

function ScrollToTopButton() {

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    })
  }, [])

  return (
    <div className='button-div'>
      {scrollToTopButton && (<Link href='/' style={{textDecoration: 'none'}}><span className='button'><FaRegArrowAltCircleUp /></span></Link>)}
            
    </div>
  )
}

export default ScrollToTopButton
