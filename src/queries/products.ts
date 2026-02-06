import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/products";


export const useGetAllProducts = (id:string | undefined,order:string,brands:string[])=>{
  return useQuery({
    queryKey: [`products ${id} ${order} ${brands}`],
    queryFn: () => {
      return getAllProducts(id,order,brands)
    },
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}