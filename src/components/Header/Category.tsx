import { BiCategory } from "react-icons/bi";
import Button from "./Button";

function Category() {
  return (
    <div>
      <Button title={'Kategoriýalar'}>
        <BiCategory size={24} className="text-custom-blue font-bold mr-3" />
      </Button>
    </div>
  )
}

export default Category