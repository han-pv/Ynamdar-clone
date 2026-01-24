import Banner from "./components/Banner"
import CategoryMain from "./components/CategoryMain"
import categoryProducts from "../../data/categoryWithProduct.json"

function index() {
  return (
    <div className="container mx-auto px-3 my-6">
      <Banner />

      {
        categoryProducts.map((category,index)=>(
          <CategoryMain key={"main-category-"+index} data={category}/>
        ))
      }
    </div>
  )
}

export default index