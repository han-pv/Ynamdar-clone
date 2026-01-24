import { useState } from 'react'
import type { CategoryType } from '../types/Category'
import { Link } from 'react-router-dom'


function Sidebar({ categories }: { categories: CategoryType | undefined }) {
  const [order, setOrder] = useState<string>("")

  return (
    <div className='w-1/4 border border-gray-300 py-5 px-4 bg-white rounded'>
      {
        categories?.subcategories &&
        <div className='mb-4'>
          <div className='text-black font-semibold text-xl'>
            Içki kategoriýalar
          </div>
          <div className='px-2 mt-3 text-gray-700 text-lg flex flex-col'>
            {
              categories.subcategories.map((category, index) => (
                <Link className='inline-block w-fit hover:text-custom-orange' key={'subcategory-' + index} to={'/category/' + category.id}>
                  {category.name}
                </Link>
              ))
            }
          </div>
        </div>
      }
      <div className='mb-4'>
        <div className='text-black font-semibold text-xl'>
          Tertip
        </div>
        <div className='px-2 my-1 text-gray-700 text-lg flex flex-col'>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-3.5 w-3.5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  order == "" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setOrder(e.target.value)} className='hidden' type="radio" name="order" value={""} />
            Hic hili
          </label>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-3.5 w-3.5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  order == "desc" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setOrder(e.target.value)} className='hidden' type="radio" name="order" value={'desc'} />
            Arzandan Gymmada
          </label>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-3.5 w-3.5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  order == "asc" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setOrder(e.target.value)} className='hidden' type="radio" name="order" value={'asc'} />
            Gymmatan Arzana
          </label>
        </div>
      </div>

      <div className='mb-4'>
        <div className='text-black font-semibold text-xl'>
          Brands
        </div>
        <div>
          <input type="text" placeholder='Gozleg' className='border my-2 border-gray-500 focus:border-blue-500 outline-none transition-all rounded-md w-full py-1 px-2'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar