import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCustomer } from '../store/slices/customerSlice'
import { useSelector } from 'react-redux'

function AddCustomer() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")

    let dispatch = useDispatch()

    const {customers} = useSelector(state => state.customers)

    const add = () => {

        dispatch(addNewCustomer({ companyName, contactName }))
    }

    return (<>

        <h1>Add Customer</h1>
        <div>
            <label htmlFor="">Company Name</label>
            <input type="text" value={companyName} onChange={e => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Name</label>
            <input type="text" value={contactName} onChange={e => setcontactName(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <hr />

        <ul>
            {
                customers.map(customer => {
                    return <>
                        <li key={customer.id}>{customer.companyName}</li>
                    </>
                })
            }
        </ul>

    </>
    )
}

export default AddCustomer