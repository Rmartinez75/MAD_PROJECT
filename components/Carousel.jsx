
import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"


function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3500,
}) {

  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const SlideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(SlideInterval)
  }, [])

  return (
    <div className='overflow-hidden relative'>
      <div className='flex max-w-[400px] transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeftIcon />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRightIcon />
        </button> */}
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2 cursor-pointer'>
          {slides.map((_, i) => (
            <div onClick={() => { setCurr(i)}} key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-1': 'bg-opacity-25'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel

