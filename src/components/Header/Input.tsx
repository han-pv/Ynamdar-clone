import { useState } from 'react'
import type { InputProp } from '../../types/Header'

function Input(props:InputProp) {
  const [focus,setFocus] = useState(props.defaultValue ? true : false)

  return (
    <div className='relative'>
      <label className={'absolute bg-white px-1 transition-all text-sm ' + (focus ? "-top-3 left-3" : "top-2 left-2")} htmlFor={props.name}>{props.label}</label>

      <div className='border border-blue-500 rounded flex items-center'>
        <label htmlFor={props.name} className='ml-3'>{props.defaultValue}</label>
        <input onBlur={()=>!props.defaultValue && !props.value && setFocus(false)} onFocus={()=>setFocus(true)} className='w-full py-2 pl-1 pr-3 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' id={props.name} value={props.value} onChange={props.onChange} name={props.name} type={props.type}/>
      </div>
    </div>
  )
}

export default Input