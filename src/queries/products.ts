import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/products";


export const useGetAllProducts = ()=>{
  return useQuery({
    queryKey: [`products`],
    queryFn: () => {
      return getAllProducts()
    },
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}