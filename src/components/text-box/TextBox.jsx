import React from 'react'
import { useState } from 'react'
import { TextField,Box,Button } from '@mui/material'

const TextBox = () => {

    const [value,setValue]=useState("")

    const [list,setList]=useState([])

    const fieldHandler=(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }


    const addList=()=>{
        setList([...list,value])
       
    }
    console.log(list)

  return (
    <Box sx={{align:'center'}}>
         <TextField
          required
          id="standard-required"
          label="Add"
          defaultValue={value}
          variant="standard"
          type="text"
           onChange={fieldHandler}
           sx={{width:800}}
        />
        <br/>
        <Button variant="contained" type='button' onClick={addList}>Add</Button>
        <p>{value}</p>
        <h5>{list.map((listt,idx)=><p key={idx}>{`${idx} - ${listt} `}</p>)}</h5>
    </Box>
  )
}

export default TextBox