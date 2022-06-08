import React, { useState } from 'react'
import Complete from './Complete'

const Todoitem = ({todo,handledelete}) => {
    // const [compdata,setcompdata]=useState([])
    // const [check,setcheck]=useState(false)
    // const handlecheck=(e)=>{
    //     console.log(e.target.checked)
    //     setcheck(e.target.checked)
    //     setcompdata([...compdata,todo])
       
    // }
  return (
    <div>
        <div key={todo.id} style={{display:"flex",
    textAlign:"center" ,border:"1px solid black"}}>
           
           <label><input type="checkbox" onClick={()=>handledelete(todo)}></input></label>
           <h3>{todo.value}</h3>
           <label><i className="fa-solid fa-star"></i></label>
        </div>
        
    </div>
  )
}

export default Todoitem