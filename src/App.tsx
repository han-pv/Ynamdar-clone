import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"
import Brands from "./pages/Brands"
import Search from "./pages/Search"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/brands" element={<Brands />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </>
  )
}

export default App
