import React, { useState } from 'react'
import Button from './Button'
import { GrLogin } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'
import Input from './Input'

function Login() {
  const [open,setOpen] = useState(false)
  const {t} = useTranslation()
  const [data,setData] = useState({
    phone:"",
    email:"",
    password:"",
  })

  const handleData = ()=>{

  }

  return (
    <div>
      <Button title={t('login')} action={()=>setOpen(true)}>
        <GrLogin size={20} className='text-custom-blue font-bold mr-3' />
      </Button>

      <Popup open={open} setOpen={setOpen} title={t('login')}>
        <Input name="phone" label="Telefon" type="number" defaultValue="+993" onChange={handleData}/>
      </Popup>
    </div>
  )
}

export default Login