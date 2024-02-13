import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

    const counterSlice = useSelector(state => state.counter)


  return (<>
    <div>Home</div>
    <h1>{counterSlice.value}</h1>
  </>
  )
}

export default Home