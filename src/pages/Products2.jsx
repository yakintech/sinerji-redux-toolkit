import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../store/slices/cartSlice'

function Products2() {

    const [products, setproducts] = useState([])

    let dispatch = useDispatch()

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(json => setproducts(json))

    
    }, [])

  return (<>
    <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Add To Cart</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => {
                return <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.unitPrice}</td>
                    <td><button onClick={() => dispatch(addCartItem(product)) }>Add to cart</button></td>
                </tr>
            })}
        </tbody>
    </table>
  </>
  )
}

export default Products2