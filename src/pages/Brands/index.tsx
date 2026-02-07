import { useEffect, useState } from "react"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import { useGetAllBrands } from "../../queries/brands"
import Search from "../../components/Search"
import BrandCard from "./components/BrandCard"
import nProgress from "nprogress"

function index() {
  const [keyword, setKeyword] = useState<string>("")
  const { data, isLoading, isError, error } = useGetAllBrands()
  
  const filterBrands = () => {
    if (!data) return []

    const categories = []
    for (let i = 0; i < data.length; i++) {
      const brands = []
      for (let j = 0; j < data[i].brands.length; j++){
        if(data[i].brands[j].name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())){
          brands.push(data[i].brands[j])
        }
      }
      if (brands.length) categories.push({...data[i],brands:brands})
    }
    return categories
  }

  useEffect(() => {
    if (isLoading) {
      nProgress.start()
    } else {
      nProgress.done()
    }
  }, [isLoading])

  if (isLoading) return <Loading />
  else if (isError) return <Error error={error} />
  return (
    <div className="container px-5 mx-auto">
      <div className="my-6">
        <Search keyword={keyword} setKeyword={setKeyword} />
      </div>
      {data && filterBrands().map((category) => (
        <div key={category.categoryId}>
          <div className="text-2xl font-bold py-2" >{category.category}</div>
          <div className="grid grid-cols-6 gap-5 mb-5">
            {category.brands.map((brand) => {
              if (brand.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) {
                return (
                  <div key={"category-page-brand-" + brand.id}><BrandCard data={brand} /></div>
                )
              }
            })}
          </div>
        </div>
      ))}

    </div>
  )
}

export default index