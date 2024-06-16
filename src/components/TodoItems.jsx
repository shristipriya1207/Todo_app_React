// import TodoItem1 from "./TodoItem1";
// import React from 'react'

// const TodoItems=({todoItems})=>{
// return(
//     <div className="items-container">
//  <TodoItem1 todName={"Buy milk"} todDate={"4/10/2023"} />   
//  <TodoItem1 todName={"Go to college"} todDate={"4/10/2023"} />
//  {/* <TodoItem2/> */}
//  </div>
// )
// }

// export default TodoItems


// import { useContext } from "react";
// import TodoItem1 from "./TodoItem1";
// import React from 'react'
// import { TodoItemsContext } from "../store/todo-items-store";

// const TodoItems=({todoItems, onDeleteClick})=>{



// return(
//     <div className="items-container">
//         {todoItems.map(item=>
//             <TodoItem1  key={item.name} todDate={item.dueDate} todName={item.name}  onDeleteClick={onDeleteClick}/>
//         )}
//  {/* <TodoItem1 todName={"Buy milk"} todDate={"4/10/2023"} />   
//  <TodoItem1 todName={"Go to college"} todDate={"4/10/2023"} /> */}
//  {/* <TodoItem2/> */}
//  </div>
// )
// }

// export default TodoItems



// after adding context api 


import { useContext } from "react";
import TodoItem1 from "./TodoItem1";
import React from 'react'
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems=({onDeleteClick})=>{

const todoItems=useContext(TodoItemsContext)

return(
    <div className="items-container">
        {todoItems.map(item=>
            <TodoItem1  key={item.name} todDate={item.dueDate} todName={item.name}  onDeleteClick={onDeleteClick}/>
        )}
 {/* <TodoItem1 todName={"Buy milk"} todDate={"4/10/2023"} />   
 <TodoItem1 todName={"Go to college"} todDate={"4/10/2023"} /> */}
 {/* <TodoItem2/> */}
 </div>
)
}

export default TodoItems