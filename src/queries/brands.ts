import { useQuery } from "@tanstack/react-query"
import { getAllBrands } from "../api/brands";

export const useGetAllBrands = (id:string | undefined)=>{
  return useQuery({
    queryKey: [`brands ${id}`],
    queryFn: () => {
      return getAllBrands(id)
    },
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}