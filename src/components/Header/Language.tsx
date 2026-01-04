import { GrLanguage } from "react-icons/gr"
import Button from "./Button"

function Language() {
  return (
    <div>
      <Button title="">
        <GrLanguage size={24} className="text-custom-blue font-bold"/>
      </Button>
    </div>
  )
}

export default Language