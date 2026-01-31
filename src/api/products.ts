import axios from "axios";
import type { ProductCardProps } from "../types/Product";

export const getAllProducts = async()=>{
  const {data} = await axios.get<ProductCardProps[]>("http://localhost:5000/products")
  return data
}