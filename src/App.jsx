
// import AppName from "./components/AppName"
// import AddTodo from "./components/AddTodo"
// // import TodoItem1 from "./components/TodoItem1"
// // import TodoItem2 from "./components/TodoItem2"
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import "./App.css"; 
// import WelcomeMessage from "./components/WelcomeMessage";
// function App() {
// // const initialtodoItems=[  //array of objects
// //   {
// //     name:"buy milk",
// //     dueDate:"4/10/2023"

// // },
// // {
// //   name:"go to college",
// //     dueDate:"4/10/2023"
// // },
// // {
// //   name:"Like this video",
// //     dueDate:"4/10/2023"
// // }];

// const handleNewItem=(itemName,itemDueDate)=>{
//   console.log(`New item Added: ${itemName} Date: ${itemDueDate}`)
//   const newTodoItems=[...todoItems ,{name:itemName, dueDate:itemDueDate}]
//   settodoItems(newTodoItems)
// }



// const [todoItems ,settodoItems] = useState([""]);

// const handleDeleteItem = (todoItemName)=>{
//   const newTodoItems =todoItems.filter(item=> item.name !== todoItemName);
//   settodoItems(newTodoItems)
//   console.log(`item deleted :${todoItemName}`)
// }
//   return (
   
//   <center className='todo-container'>
//  <AppName/>
//  <AddTodo onNewItem={handleNewItem}/>
//  {todoItems.length == 0 &&<WelcomeMessage/>}
//  {/* <div className="items-container">
//  <TodoItem1 todName={"Buy milk"} todDate={"4/10/2023"} />   
//  <TodoItem1 todName={"Go to college"} todDate={"4/10/2023"} /> */}
//  {/* <TodoItem2/> */}
//  {/* </div> */}

// <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
//   </center>
      
      
  
//   )
// }

// export default App





//after some modification in code


// import AppName from "./components/AppName"
// import AddTodo from "./components/AddTodo"

// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import "./App.css"; 
// import WelcomeMessage from "./components/WelcomeMessage";
// function App() {


// const handleNewItem=(itemName,itemDueDate)=>{
//   // settodoItems((currValue)=>{
//   //   const newTodoItems=[
//   //     ...currValue,
//   //     {
//   //       name:itemName, dueDate:itemDueDate
//   //     },
//   //   ];
//   //   return newTodoItems
//   // });

//   settodoItems((currValue) =>[
//     ...currValue,
//     {
//       name:itemName, dueDate:itemDueDate
//     },

//   ])
  
  
  
// }



// const [todoItems ,settodoItems] = useState([""]);

// const handleDeleteItem = (todoItemName)=>{
//   const newTodoItems =todoItems.filter(item=> item.name !== todoItemName);
//   settodoItems(newTodoItems)
//   console.log(`item deleted :${todoItemName}`)
// }
//   return (
   
//   <center className='todo-container'>
//  <AppName/>
//  <AddTodo onNewItem={handleNewItem}/>
//  {todoItems.length == 0 &&<WelcomeMessage/>}
//  {/* <div className="items-container">
//  <TodoItem1 todName={"Buy milk"} todDate={"4/10/2023"} />   
//  <TodoItem1 todName={"Go to college"} todDate={"4/10/2023"} /> */}
//  {/* <TodoItem2/> */}
//  {/* </div> */}

// <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
//   </center>
      
      
  
//   )
// }




// export default App





// after adding context api


import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"

import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css"; 
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {


const addNewItem=(itemName,itemDueDate)=>{
  // settodoItems((currValue)=>{
  //   const newTodoItems=[
  //     ...currValue,
  //     {
  //       name:itemName, dueDate:itemDueDate
  //     },
  //   ];
  //   return newTodoItems
  // });

  settodoItems((currValue) =>[
    ...currValue,
    {
      name:itemName, dueDate:itemDueDate
    },

  ])
  
  
  
}



const [todoItems ,settodoItems] = useState([""]);

const deleteItem = (todoItemName)=>{
  const newTodoItems =todoItems.filter(item=> item.name !== todoItemName);
  settodoItems(newTodoItems)
  console.log(`item deleted :${todoItemName}`)
}

// const defaultTodoItems = [{name:"buy ghee" , dueDate:"today"}]
  return (
   <TodoItemsContext.Provider value={todoItems}>
  <center className='todo-container'>
 <AppName/>
 <AddTodo onNewItem={addNewItem}/>
<WelcomeMessage/>
 {/* <div className="items-container">
 <TodoItem1 todName={"Buy milk"} todDate={"4/10/2023"} />   
 <TodoItem1 todName={"Go to college"} todDate={"4/10/2023"} /> */}
 {/* <TodoItem2/> */}
 {/* </div> */}

<TodoItems onDeleteClick={deleteItem} />
  </center>
      
  </TodoItemsContext.Provider> 
  
  )
}




export default App
