import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

    const { cartItems } = useSelector(state => state.cart)

    return (<>
            <ul>
                {cartItems.map((item, index) => {
                    return <li key={index}> {item.name} - {item.quantity} * {item.price.toFixed(2)}</li>
                })}
            </ul>
    </>
    )
}

export default Cart