import React, { useEffect, useState } from 'react'

function GoToTop() {
  const [open,setOpen] = useState(false)

  useEffect(()=>{
    const toggleOpen = ()=>{
      setOpen(window.scrollY > 100)
    }

    document.addEventListener("scroll",toggleOpen)
  },[])

  const goTop = ()=>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <button onClick={goTop} className={'bg-white p rounded-full fixed z-2 bottom-5 right-5 transition-all duration-300 '+(open ? "visible opacity-100":"invisible opacity-0")}>
      <svg className='w-12 h-12 text-custom-orange' data-v-ced589b9="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 7l5 5h-3v4h-4v-4H7l5-5m0 15A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m0-2a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8Z"></path></svg>
    </button>
  )
}

export default GoToTop