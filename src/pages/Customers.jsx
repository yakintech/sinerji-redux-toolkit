import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCustomer } from '../store/slices/customerSlice'
import { fetchAllCustomers } from '../store/slices/customerSlice'

function Customers() {

    const { customers, loading } = useSelector(state => state.customers)
    


    let dispatch = useDispatch()

    const deleteCustomerById = (id) => {
       const confirm = window.confirm("Are you sure you want to delete this customer?")

         if(confirm) {
              dispatch(deleteCustomer(id))
         }
    }
    

    return (<>
       {
              loading ? <div>Loading...</div> :
              <div>
                <h1>Customers</h1>
                <ul>
                     {
                          customers.map(customer => {
                            return <>
                            <li key={customer.id}>{customer.companyName}</li>
                            <button onClick={() => deleteCustomerById(customer.id)}>Delete</button>
                            </>
                          })
                     }
                </ul>
              </div>
       }
    </>
    )
}

export default Customers