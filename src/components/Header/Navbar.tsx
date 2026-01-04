import Category from './Category'
import { useNavigate } from 'react-router-dom'
import { FiLayers } from "react-icons/fi";
import Button from './Button';
import Search from './Search';
import Language from './Language';
import Stick from './Stick';
import { GrLogin } from 'react-icons/gr';
import { GoPersonAdd } from 'react-icons/go';
import { FaListAlt, FaRegHeart } from 'react-icons/fa';
import { HiOutlineDocumentDuplicate, HiOutlineReceiptTax } from 'react-icons/hi';
import { MdOutlineContentCopy } from 'react-icons/md';
import { RxArchive } from 'react-icons/rx';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='bg-white py-2 text-custom-blue h-15'>
      <div className="container mx-auto px-3 flex items-center h-full">
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
        <Button title=''>
          <RxArchive size={20} className='text-custom-blue font-bold' />
        </Button>
        <Stick />
        <Button title=''>
          <IoMdHeartEmpty size={20} className='text-custom-blue font-bold' />
        </Button>
        <Stick />
        <Button title=''>
          <BsCart2 size={20} className='text-custom-blue font-bold' />
        </Button>
      </div>
    </div>
  )
}

export default Navbar