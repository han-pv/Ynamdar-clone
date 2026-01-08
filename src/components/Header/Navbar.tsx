import Category from './Category'
import { useNavigate } from 'react-router-dom'
import { FiLayers } from "react-icons/fi";
import Button from './Button';
import Search from './Search';
import Language from './Language';
import Stick from './Stick';
import { GrLogin } from 'react-icons/gr';
import { GoPersonAdd } from 'react-icons/go';
import { RxArchive } from 'react-icons/rx';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [open,setOpen] = useState<boolean>(false)
  return (
    <div className='bg-white py-2 text-custom-blue h-15 shadow-lg'>
      <div onClick={()=>setOpen(false)} className={"absolute top-29.5 left-0 w-full h-[calc(100vh-118px)] backdrop-blur-[2px] "+(open ? "scale-100" : "scale-0")}></div>
      <div className="relative container mx-auto px-3 flex items-center h-full">
        <Category open={open} setOpen={setOpen}/>
        <Stick />
        <Button title='Brendler' action={() => navigate('brands')}>
          <FiLayers size={20} className='text-custom-blue font-bold mr-3' />
        </Button>
        <Search />
        <Language />
        <Stick />
        <Button title='Içeri gir'>
          <GrLogin size={20} className='text-custom-blue font-bold mr-3' />
        </Button>
        <Stick />
        <Button title='Agza bol'>
          <GoPersonAdd size={20} className='text-custom-blue font-bold mr-3' />
        </Button>
        <Stick />
        <Button>
          <RxArchive size={20} className='text-custom-blue font-bold' />
        </Button>
        <Stick />
        <Button>
          <IoMdHeartEmpty size={20} className='text-custom-blue font-bold' />
        </Button>
        <Stick />
        <Button>
          <BsCart2 size={20} className='text-custom-blue font-bold' />
        </Button>
      </div>
    </div>
  )
}

export default Navbar