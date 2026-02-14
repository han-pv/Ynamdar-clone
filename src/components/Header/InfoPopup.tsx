import PopupContainer from '../PopupContainer'
import { usePopupStore } from '../../store/popup'
import Input from './Input'
import { useUserStore } from '../../store/user'
import { useEffect, useState } from 'react'

function InfoPopup() {
  const { user } = useUserStore(state => state)
  console.log(user)
  const [data, setData] = useState({
    phone: JSON.parse(localStorage.getItem("user")!).phone,
    fullname: JSON.parse(localStorage.getItem("user")!).fullname,
    address: JSON.parse(localStorage.getItem("user") || "").address,
    gender: JSON.parse(localStorage.getItem("user") || "").gender,
    birthDate: JSON.parse(localStorage.getItem("user") || "").birthDate,
    cashback: JSON.parse(localStorage.getItem("user") || "0").cashback
  })
  const { openInfo, setOpenInfo } = usePopupStore(state => state)
  const sendData = () => { }
  return (
    <PopupContainer title='Hasabym' open={openInfo} setOpen={setOpenInfo} sendData={sendData}>
      <div className='space-y-6 mt-6'>
        <Input label={"Telefon"} type="string" defaultValue='+993' name='phone' onChange={() => { }} value={data.phone} />
        <Input label={"Doly adynyz*"} type="string" name='fullname' onChange={() => { }} value={data.fullname} />
        <Input label={"Salgynyz"} type="string" name='address' onChange={() => { }} value={data.address} />
        
      </div>
    </PopupContainer>
  )
}

export default InfoPopup