import React from 'react'
import { useState } from 'react'
import { TextField,Box,Button, Grid,Typography,IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    const deleteList=(idx)=>{
      console.log(idx)
      let arr=list
      console.log(arr)
      arr.splice(idx,1)
      console.log(arr)
      setList([...arr])
    }

  

  return (
    <Box sx={{mt:2}}>
      <Typography variant='h4' align='center' gutterBottom>To-Do App</Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            id="standard-required"
            label="Add"
            defaultValue={value}
            variant="outlined"
            type="text"
            onChange={fieldHandler}
            sx={{width:800}}
            placeholder="Enter your todo's list"
          />
        </Grid>
        <Grid item>
        <Button variant="contained" type='button' onClick={addList}>Add</Button>
        </Grid>
       </Grid>

        <Grid container justifyContent="center" alignItems="center">
        <Grid item>
                  {
                    list?.map((todo,idx)=>{
                      return <Box sx={{height:50,width:800,mt:2}}>
                          <Typography variant='h4' key={idx} gutterBottom>
                            <ArrowForwardIosIcon/>
                            {
                            `${idx}-${todo}`
                            }

                          <IconButton onClick={()=>deleteList(todo,idx)}>
                            <DeleteForeverIcon/>
                          </IconButton>

                          </Typography>
                          
                      </Box>

                    })
                  }
                </Grid>
        </Grid>
      
    </Box>
  )
}

export default TextBox