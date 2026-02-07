import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

function Search() {
  const [keyword, setKeyword] = useState<string>("")
  const {t} = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="flex items-center w-full bg-gray-200 rounded-md pr-3 mx-3">
      <input
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key == 'Enter' && navigate("search/"+keyword)}
        className="w-full py-2 px-3 outline-none"
        type="text"
        placeholder={t("search")} />
      <CiSearch size={24} />
    </div>
  )
}

export default Search