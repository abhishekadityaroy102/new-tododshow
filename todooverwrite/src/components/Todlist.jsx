import React from 'react'
import Complete from './Complete'
import Todoitem from './Todoitem'

const Todlist = ({data,handledelete}) => {
  return (
    <div>Todlist{
        data.map((el)=>(<Todoitem todo={el} handledelete={handledelete}/>))
        }
        
    </div>
  )
}

export default Todlist