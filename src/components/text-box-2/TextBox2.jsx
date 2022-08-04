import React from 'react'
import { useState,useReducer } from 'react'
import { TextField,Box,Button, Grid,Typography,IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const TextBox2 = () => {


    const initialvalue={
        inputValue:"",
        list:[]
    };

    
    const reducer=(state,action)=>{
        switch(action.type){
        case 'fieldHandler':
            return {
                ...state,
                inputValue:action.payload
            }
        case 'add':
            return {list: [...state.list,state.inputValue]}
            default:
                return null;
            }
        }
        
        const [add,dispatch]=useReducer(reducer,initialvalue)

   
    
    console.log(add.list)
    
    // const addList=()=>{
    //     setList([...list,value])
       
    // }
    // console.log(list)

    // const deleteList=(idx)=>{
    //   let arr=[...list]
    //   arr.splice(idx,1)
    //   setList(arr)
    // }
    

  return (
    <Box sx={{mt:2}}>
      <Typography variant='h4' align='center' gutterBottom>To-Do App</Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            id="standard-required"
            label="Add"
            defaultValue={add.inputValue}
            variant="outlined"
            type="text"
            onChange={(e)=>dispatch({type:'fieldHandler',payload:e.target.value})}
            sx={{width:800}}
            placeholder="Enter your todo's list"
          />
        </Grid>
        <Grid item>
        <Button variant="contained" type='button' onClick={()=>dispatch({type: 'add'})}>Add</Button>
        </Grid>
       </Grid>

        <Grid container justifyContent="center" alignItems="center">
        <Grid item>
                  {
                    add.list.map((todo,idx)=>{
                      return <Box sx={{height:50,width:800,mt:2}}>
                          <Typography variant='h4' key={idx} gutterBottom>
                            <ArrowForwardIosIcon/>
                            {
                            `${idx}-${todo}`
                            }

                          {/* <IconButton onClick={()=>deleteList(todo,idx)}>
                            <DeleteForeverIcon/>
                          </IconButton> */}

                          </Typography>
                          
                      </Box>

                    })
                  }
                </Grid>
        </Grid>
      
    </Box>
  )
}

export default TextBox2