import { useState } from 'react'
import { food, market, store } from '../../assets/images'
import BusinessButton from './BusinessButton'
import { FaLocationDot } from "react-icons/fa6";


function Top() {
  const [active, setActive] = useState<'market' | 'store' | 'food'>('market')
  return (
    <div className='bg-custom-orange '>
      <div className='container mx-auto px-3 pt-3 pb-1.5 flex items-center justify-between'>
        <div className='flex gap-3'>
          <BusinessButton image={market} name={'market'} active={active} setActive={setActive} />
          <BusinessButton image={store} name={'store'} active={active} setActive={setActive} />
          <BusinessButton image={food} name={'food'} active={active} setActive={setActive} />
        </div>
        <button className='flex items-center bg-black/20 hover:bg-black/30 text-white rounded-md px-5 py-2'>
          <FaLocationDot />
          <span className='ml-3'>Aşgabat</span>
        </button>
      </div>

    </div>
  )
}

export default Top