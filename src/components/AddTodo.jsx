// import React, { useState } from 'react'
// import { BiMessageAdd } from "react-icons/bi";


// function AddTodo({onNewItem}) {
// const [todoName , setTodoName ] = useState("");
// const [dueDate, setDueDate] = useState("")
// const handleNameChange = (event) =>{
//   setTodoName(event.target.value);
// }
// const handleDateChange = (event) =>{
//   setDueDate(event.target.value);
// }

// const handleAddButtonClicked=()=>{
//   onNewItem(todoName,dueDate)
//   setDueDate("");
//   setTodoName("");
// }


//   return (
//     <div className="container text-center">
//     <div className="row kg-row">
  
//     <div className="col-6">
//       <input type="text" placeholder="Enter todo here"
//       onChange={handleNameChange}
//       value={todoName} />
//     </div>
//     <div className="col-4">
//       <input type="date" onChange={handleDateChange} value={dueDate}/>
//     </div>
//     <div className="col-2">
//     <button type="button" className="btn btn-success kg-button"
//     onClick={handleAddButtonClicked}
//     ><BiMessageAdd/></button>

//     </div>


//     </div>

//   </div>
//   //  </div>
//   );
// }

// export default AddTodo



// after adding form, useref hook concept

import React, { useState ,useRef, } from 'react'
import { BiMessageAdd } from "react-icons/bi";


function AddTodo({onNewItem}) {
const [todoName , setTodoName ] = useState("");
const [dueDate, setDueDate] = useState("")
// const noOfUpdates= useRef(0);
const todoNameElement = useRef();
const dueDateElement = useRef();

/*const handleNameChange = (event) =>{
  setTodoName(event.target.value);
  // noOfUpdates.current+=1;
}


const handleDateChange = (event) =>{
  setDueDate(event.target.value);
  // console.log(`noOfUpdate are : ${noOfUpdates.current}`)
}*/

const handleAddButtonClicked=(event)=>{
  // console.log(event)
  event.preventDefault();
 
  // setDueDate("");
  // setTodoName("");
const todoName = todoNameElement.current.value;
const dueDate=dueDateElement.current.value;
todoNameElement.current.value="";
dueDateElement.current.value=""
onNewItem(todoName,dueDate)


}


  return (
    <div className="container text-center">
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
    
    <div className="col-6">
      <input
       type="text"
        placeholder="Enter todo here"
      // onChange={handleNameChange}
      // value={todoName}
      ref={todoNameElement}
       />
    </div>
    <div className="col-4">
      <input 
      type="date" 
      // onChange={handleDateChange} 
      // value={dueDate}
      ref={dueDateElement}
      />
    </div>
    <div className="col-2">
    <button    
     type="submit"
     className="btn btn-success kg-button"
    
    ><BiMessageAdd/></button>

    </div>


    </form>

  </div>
 
  )
}

export default AddTodo