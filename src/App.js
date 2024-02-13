import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Favorites from './pages/Favorites'

function App() {
  return (<>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>

    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  
  </>
  )
}

export default App