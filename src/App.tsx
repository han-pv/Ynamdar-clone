import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"
import Brands from "./pages/Brands"
import Search from "./pages/Search"
import Footer from "./components/Footer"
import GoToTop from "./components/GoToTop"

function App() {
  // const {pathname} = useLocation()

  return (
    <>
      {/* {
        pathname !== "/orders" && <Header />
      } */}
      
      <Header />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/brands" element={<Brands />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
      <GoToTop />
      <Footer />
    </>
  )
}

export default App
