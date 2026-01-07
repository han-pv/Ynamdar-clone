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

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='bg-white py-2 text-custom-blue h-15 shadow-lg'>
      <div className="relative container mx-auto px-3 flex items-center h-full">
        <Category />
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