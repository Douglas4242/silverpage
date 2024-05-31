import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Favorites, LoginSignup, Product, Shop, ShopCategory } from './pages'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/markers' element={<ShopCategory category="markers" />} />
          <Route path='/motivacionais' element={<ShopCategory category="motivacionais" />} />
          <Route path='/animais' element={<ShopCategory category="animais" />} />
          <Route path='/livros' element={<ShopCategory category="livros" />} />
          <Route path='/religiosos' element={<ShopCategory category="religiosos" />} />
          <Route path='/diversos' element={<ShopCategory category="diversos" />} />
          <Route path='/personalizados' element={<ShopCategory category="personalizados" />} />
          <Route path='/planners' element={<ShopCategory category="planners" />} />
          <Route path="product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
