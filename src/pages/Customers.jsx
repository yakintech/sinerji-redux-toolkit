import React from 'react'
import { useSelector } from 'react-redux'

function Customers() {

    const { customers, loading } = useSelector(state => state.customers)

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
                            <button>Delete</button>
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