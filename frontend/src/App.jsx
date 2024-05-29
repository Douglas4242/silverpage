import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Favorites, LoginSignup, Product, Shop, ShopCategory } from './pages'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/markers' element={<ShopCategory category="markers" />} />
          <Route path='/planners' element={<ShopCategory category="planners" />} />
          <Route path='/about' element={<ShopCategory category="about" />} />
          <Route path="product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
