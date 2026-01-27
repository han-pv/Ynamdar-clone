import Error from "../../components/Error"
import Loading from "../../components/Loading"
import { useGetAllBrands } from "./api-query/brands"

function index() {
  const {data,isLoading,isError, error}:any = useGetAllBrands()

  if (isLoading) return <Loading />
  else if(isError) return <Error error={error}/>
  return (
    <div>
      
    </div>
  )
}

export default index