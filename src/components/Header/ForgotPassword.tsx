import { useState } from "react"
import Popup from "./Popup"
import Input from "./Input"

function ForgotPassword() {
  const [data,setData] = useState({phone:"",email:""})
  const [open,setOpen] = useState(false)

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div className="text-right">
      <button onClick={()=>setOpen(true)} className="text-gray-500 mb-3">Açar sözümi unutdym</button>

      <Popup title={"Maglumatyňyzy giriziň"} open={open} setOpen={setOpen}>
        <div className='my-5'>
          <Input name="phone" label="Telefon" type="number" defaultValue="+993" onChange={handleData} value={data.phone} />
        </div>
      </Popup>
    </div>
  )
}

export default ForgotPassword