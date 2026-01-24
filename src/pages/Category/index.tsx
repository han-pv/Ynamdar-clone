import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import categories from "../../data/category.json"
import Sidebar from '../../components/Sidebar';
import type { CategoryType } from '../../types/Category';


function index() {
  const {id} = useParams()
  const [category,setCategory] = useState<CategoryType | undefined>(undefined)
  
  useEffect(()=>{
    const findCategory = (categories:CategoryType[],id:number):CategoryType | undefined=>{
      for(const category of categories){
        if (category.id === id){
          return category
        }
        if (category.subcategories) {
          const found = findCategory(category.subcategories,id)
          if (found) return found
        }
      }
      return undefined
    }

    setCategory(findCategory(categories,Number(id)))
  },[id])
  
  return (
    <div className='container mx-auto px-3 mt-5'>
      <h1 className='text-3xl font-bold'>{category?.name}</h1>
      <div className='text-gray-500 mb-5'>Jemi: <span className='font-medium'>4585</span> haryt</div>
      
      <div>
        <Sidebar categories={category} />
        <div className='w-3/4 grid-cols-4'></div>
      </div>
    </div>
  )
}

export default index