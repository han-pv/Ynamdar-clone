import React, { useEffect, useRef, useState } from 'react'
import type { InputProp } from '../../types/Header'

function Input(props:InputProp) {
  const [focus,setFocus] = useState(false)

  return (
    <div className='relative'>
      <label className={'absolute bg-white px-1 transition-all ' + (focus ? "-top-3 left-3" : "top-2 left-2")} htmlFor={props.name}>{props.label}</label>
      <input onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} className='w-full py-2 px-3 border border-blue-500 rounded outline-none' id={props.name} {...props} />
    </div>
  )
}

export default Input