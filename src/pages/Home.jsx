import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const state = useSelector(state => state)

  console.log("state", state)


  return (<>
    <div>Home</div>

  </>
  )
}

export default Home