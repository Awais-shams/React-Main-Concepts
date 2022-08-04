import React, { useEffect, useState } from 'react'


const Practice2 = (props) => {
    const [counter,setCounter]=useState(props.counts)

    const [text,setText]=useState("")
    const [text2,setText2]=useState("")

    useEffect(()=>{
        setCounter(props.counts)
    },[props.counts])

    
  return (
    <div>
        {console.log("render for couter 2",counter)}
        <h1>Counter 2 - {counter}</h1>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type='text' value={text2} onChange={(e)=>setText2(e.target.value)}/>
        {`1-${text} --- 2-${text2}`}
    </div>
  )
}

export default Practice2