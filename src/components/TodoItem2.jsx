import React from 'react'

function TodoItem2() {
    let todName='Go to college';
    let todDate='4/10/2023'
  return (
    <div className="container">
  
  

<div className="row kg-row">
    <div className="col-6"> {todName}
    </div>
    <div className="col-4">{todDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button">Delete</button>

    </div>
</div>
</div>
  )
}

export default TodoItem2