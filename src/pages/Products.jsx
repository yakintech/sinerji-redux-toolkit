import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, emptyFavorites } from '../store/slices/favoritesSlice'

function Products() {


    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(json => setproducts(json))

    }, [])

    let dispatch = useDispatch()

    const add = (item) => {
        
        dispatch(addFavorite(item))

    }


    return (<>
    <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Add To Fav</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => {
                return <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.unitPrice}</td>
                    <td><button onClick={() => add(product)}>Add To Fav</button></td>
                </tr>
            })}
        </tbody>
    </table>
    </>)
}

export default Products