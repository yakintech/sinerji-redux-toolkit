import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCustomers } from './store/slices/customerSlice'
import Customers from './pages/Customers'
import AddCustomer from './pages/AddCustomer'
import { useGetTodosQuery } from './services/todoService'
import Todos from './pages/Todos'


function App() {

  let dispatch = useDispatch()  

  useEffect(() => {
    
    dispatch(fetchAllCustomers())
    
  }, [])
  

  return (<>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/add-customer'>Add Customer</Link></li>
      <li><Link to='/todos'>Todos</Link></li>



    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/customers' element={<Customers />} />
      <Route path='/add-customer' element={<AddCustomer />} />
      <Route path='/todos' element={<Todos/>} />
    </Routes>
  
  </>
  )
}

export default App