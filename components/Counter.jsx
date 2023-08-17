
'use client'

import { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";


function Counter() {

  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  return (      
        <div className='flex'>
          <span className="float-left mr-2" onClick={() => setCountUp(countUp + 1)}>{countUp}</span>  <AiFillCaretUp className=' text-red-700 mr-2 mt-1' /><p>Up Vote</p> 
          <span className="float-right ml-10 mr-2" onClick={() => setCountDown(countDown + 1)} >{countDown}</span><AiFillCaretDown className="text-red-700 mr-2 mt-1" /><p>Down Vote</p>  
        </div>      
  )
}

export default Counter
