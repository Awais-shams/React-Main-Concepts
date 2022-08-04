import React, { useState } from 'react'

const Practice3 = () => {

    const [employee,setEmployee]=useState({
        name:"",
        id:"",
        designation:"",
        department:""

    })
    
    const fieldHandler=(e)=>{
    
       setEmployee((prevState)=>{
         return {...prevState,[e.target.name]:e.target.value}
       })
    }

    console.log(employee)

  return (
    <div>
        <h1>Employment Form</h1>
        <label>Name:</label>
        <input type="text" name='name' value={employee.name} onChange={fieldHandler} /><br/>
        <label>Id:</label>
        <input type="text" name='id' value={employee.id} onChange={fieldHandler} /><br/>
        <label>Designation</label>
        <input type="text" name='designation' value={employee.designation} onChange={fieldHandler} /><br/>
        <label>Department</label>
        <input type="text" name='department' value={employee.department} onChange={fieldHandler} />
        
    </div>
  )
}

export default Practice3