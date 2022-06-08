import React, { useState } from 'react'
import Complete from './Complete'
// import Complete from './Complete'
import Todlist from './Todlist'
import styles from "./Todo.module.css"
const Todo = () => {
    const [indata,setindata]=useState("")
    const handlechange=(e)=>{
        setindata(e.target.value)
    }
    const [data,setdata]=useState([]);
    const handleclick=()=>{
        setdata([...data,{id:Date.now(),
        value:indata}]);
        setindata("")
    }
    const [deldata,setdeldata]=useState([])
        const handledelete=(todo)=>{
            
           let update= data.filter((datas)=>(datas.id!==todo.id));
           setdata(update)
           let deledata=data.filter((datas)=>(datas.id===todo.id));
           console.log(deledata)
           setdeldata([...deldata,deledata[0]])
        }
    console.log(data)
  return (
    <div className={styles.main}>
        <div className={styles.inputbox}>
            <button onClick={handleclick} disabled={!indata}>+</button>
            <input type="text" placeholder="Add a to-do" onChange={handlechange} value={indata}></input>
        </div>
        <Todlist data={data} handledelete={handledelete}/>
        <Complete compdata={deldata}/>
        
    </div>
  )
}

export default Todo