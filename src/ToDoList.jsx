import React, {useState} from "react";
import Heading from "./heading";
import Input from "./input";
import List from "./list.jsx"

function ToDoList(){

    const [tasks, setTasks] = useState([]);

    return(
    <div className="toDoList">
       <Heading/>
       <Input setTasks={setTasks}/>
       <List tasks={tasks} setTasks={setTasks}/>
    </div>)
}
export default ToDoList