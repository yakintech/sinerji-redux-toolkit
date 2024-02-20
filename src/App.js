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
import Products2 from './pages/Products2'
import { fetchAllCartItems } from './store/slices/cartSlice'
import Cart from './pages/Cart'
import Users from './pages/Users'



function App() {

  let dispatch = useDispatch()  

  useEffect(() => {
    
    dispatch(fetchAllCustomers())
    dispatch(fetchAllCartItems())

    
  }, [])
  

  return (<>

    <ul style={{display:'flex', justifyContent:'space-between'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/products2'>Products2</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/users'>Users</Link></li>
      {/* <li><Link to='/cart'>Cart</Link></li> */}
      <li><Link to='/add-customer'>Add Customer</Link></li>
      <li><Link to='/todos'>Todos</Link></li>



    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products2" element={<Products2 />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/customers' element={<Customers />} />
      <Route path='/add-customer' element={<AddCustomer />} />
      <Route path='/todos' element={<Todos/>} />
      <Route path='/users' element={<Users/>} />
      {/* <Route path='/cart' element={<Cart/>} /> */}
    </Routes>
  
  </>
  )
}

export default App