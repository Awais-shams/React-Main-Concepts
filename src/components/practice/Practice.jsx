import React, { useEffect } from 'react'
import { useState } from 'react'
import Practice2 from './Practice2'

const Practice = () => {
  const [count,setCount]=useState(0)
  
  // console.log("render")
  // useEffect(()=>{
  //   console.log("render--",count)
  // })

  const increment=()=>{
    setCount(count+1)
  }

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     console.log("render-settime")
  //     setCount(2)
      
  //   },1000)

  // })

  return (
    <div>
      {console.log(count)}
      <h1>Practicing useSates {count}</h1>
      <button onClick={increment}>Increment</button>
      <Practice2 counts={count}/>
    </div>
  )
}

export default Practice