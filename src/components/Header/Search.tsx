import { CiSearch } from "react-icons/ci"

function Search() {
  return (
    <div className="flex items-center w-full bg-gray-200 rounded-md pr-3 mx-3">
      <input className="w-full py-2 px-3 outline-none" type="text" placeholder="Haryt ady boýunça gözle..."/>
      <CiSearch size={24}/>
    </div>
  )
}

export default Search