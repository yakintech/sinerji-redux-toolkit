import React from 'react'
import { useGetTodosQuery } from '../services/todoService'

function Todos() {

    const { data, error, isLoading } = useGetTodosQuery()


  return (<>
    {
        isLoading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> : <ul>
            {
            data.map(todo => <li key={todo.id}>{todo.title}</li>)
            }
        </ul>
    }
  </>
  )
}

export default Todos