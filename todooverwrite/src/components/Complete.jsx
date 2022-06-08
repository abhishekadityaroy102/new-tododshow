import React from 'react'
import styles from "./Complete.module.css"
const Complete = ({compdata}) => {
    console.log(compdata)
  return (
    <div>
        <div>
            <h3>SHOW COMPLETED TO-DOS</h3>
           {
               compdata.map((el)=>(<div className={styles.checked}>
                   <div>
                   <input type="checkbox"  checked="check"></input><h3>{el.value}</h3>
               
               </div><i className="fa-solid fa-star"></i>
              
               </div>)
               )
           }
        </div>
    </div>
  )
}

export default Complete