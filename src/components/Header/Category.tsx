import { BiCategory } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react";
import categories from "../../data/category.json"

function Category() {
  const [open,setOpen] = useState<boolean>(false)
  const [active,setActive] = useState<Number>(1)

  return (
    <div>
      <Button title={'Kategoriýalar'} action={()=>setOpen(!open)}>
        <BiCategory size={24} className="text-custom-blue font-bold mr-3" />
      </Button>

      <div className={"grid grid-cols-4 gap-3 p-5 absolute top-12 w-full bg-white h-[calc(100vh-118px)] transition-all origin-top  "+(open ? "scale-y-100" : "scale-y-0")}>
        <div className="overflow-auto">
          {
            categories.map((category,key)=>(
              <button key={"category-"+key} className={"block w-full border text-left mb-2 border-gray-300 rounded py-1 px-3 "+(active == category.id ? "bg-custom-orange/10 text-custom-orange" : "")}>{category.name}</button>
            ))
          }
        </div>

        <div className="col-span-3 bg-green-400">

        </div>
      </div>
    </div>
  )
}

export default Category