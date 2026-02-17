import { GrLanguage } from "react-icons/gr"
import Button from "./Button"
import { en, ru, tm } from "../../assets/images"
import i18n from "../../i18n"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import OutClick from "../OutClick"

function Language() {
  const lang = useTranslation().i18n.language
  const [open,setOpen] = useState<boolean>(false)
  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }
  
  return (
    <OutClick action={()=>setOpen(false)}>
      <Button action={()=>setOpen(!open)}>
        <GrLanguage size={20} className="text-custom-blue font-bold" />
      </Button>
      
      <div className={"absolute top-12 bg-white py-1 px-2 rounded flex flex-col shadow transtion-all duration-200 "+(open ? "opacity-100 visible" : "opacity-0 invisible")}>
        <button onClick={() => (switchLang('tm'), setOpen(false))} className={"flex items-center p-2 rounded hover:bg-gray-200 "+(lang == 'tm' && "bg-gray-100")}><img className="w-5 border border-gray-200 mr-2" src={tm} alt="tm" />Türkmen dili</button>
        <div className="border-y border-gray-200">
          <button onClick={() => (switchLang('ru'), setOpen(false))} className={"flex items-center p-2 rounded hover:bg-gray-100 w-full "+(lang == 'ru' && "bg-gray-100")}><img className="w-5 border border-gray-200 mr-2" src={ru} alt="ru" />Русский</button>
        </div>
        <button onClick={() => (switchLang('en'), setOpen(false))} className={"flex items-center p-2 rounded hover:bg-gray-100 "+(lang == 'en' && "bg-gray-100")}><img className="w-5 border border-gray-200 mr-2" src={en} alt="en" />English</button>
      </div>
    </OutClick>
  )
}

export default Language