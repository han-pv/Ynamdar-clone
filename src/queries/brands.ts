import { useQuery } from "@tanstack/react-query"
import { getAllBrands } from "../api/brands";

export const useGetAllBrands = ()=>{
  return useQuery({
    queryKey: [`brands`],
    queryFn: () => {
      return getAllBrands()
    },
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}