import React from 'react'
import { AiFillDelete } from "react-icons/ai";

function TodoItem1({todName,todDate,onDeleteClick}) {
    
    // let todName='Buy milk';
    // let todDate='4/10Name/2023'



  return (
    <div className="container">
        <div className="row kg-row">
          
    <div className="col-6">{todName} </div>
    <div className="col-4">{todDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button"
    onClick={()=>onDeleteClick(todName)


    }
    
    ><AiFillDelete /></button>

    </div>
</div>
    </div>
  )
}

export default TodoItem1