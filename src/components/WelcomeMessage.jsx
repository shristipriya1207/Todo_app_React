// import styles from "./WelcomeMessage.module.css"
// const WelcomeMessage=()=>{
//     return <p className={styles.Welcome}>enjoy</p>;
// }

// export default WelcomeMessage;



// after adding context api

import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage=()=>{
    const todoItems=useContext(TodoItemsContext)
    

    return todoItems.length === 0 && <p className={styles.Welcome}>Enjoy Your Day</p>;
}

export default WelcomeMessage;