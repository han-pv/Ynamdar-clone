import axios from "axios";


export type brandType = {
  id:string;
  image:string;
  name:string;
}

export type categoryBrandType = {
  category:string;
  category_id:number;
  brands:brandType[]
}

export const getAllBrands = async()=>{
  const {data} = await axios.get<categoryBrandType[]>("http://localhost:5000/brands")
  return data
}