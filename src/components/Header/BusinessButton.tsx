import { useNavigate } from "react-router-dom"
import type { BusinessButtonType } from "../../types/Header"

function BusinessButton({ image, name, active, setActive }: BusinessButtonType) {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={()=>(setActive(name),navigate('/'))} className={'relative bg-white px-3.5 pt-2 pb-1.5 h-10 w-content '+(name==active ? "rounded-t-md" : 'rounded-md')}>
        <img className='w-full h-full object-contain' src={image} alt="" />
        {
          name == active && <>
            <div className='absolute -left-2 -bottom-1.5 bg-white w-[calc(100%+16px)] h-1.5'></div>
            <div className='absolute -left-2 -bottom-1.5 h-full w-2 bg-custom-orange rounded-br-md'></div>
            <div className='absolute -right-2 -bottom-1.5 h-full w-2 bg-custom-orange rounded-bl-md'></div>
          </>
        }
      </button>
    </>
  )
}

export default BusinessButton