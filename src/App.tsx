import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"
import Brands from "./pages/Brands"
import Footer from "./components/Footer"
import GoToTop from "./components/GoToTop"
import Category from "./pages/Category"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"

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
        <Route path="/category/:id" element={<Category />}/>
        <Route path="/brands" element={<Brands />}/>
        <Route path="/search/:keyword" element={<Search />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  )
}

export default App
