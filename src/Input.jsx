import React, {useState} from "react";

function Input({setTasks}){

    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTasks(){
        if(newTask !== ""){
            setTasks(t => [...t, newTask]);
        }   
        setNewTask("");
    }
    return(
    <div>
        <input type="text" value={newTask} onChange={handleInputChange}
        placeholder="Enter a task to do"></input>
        <button className="addButton"onClick={addTasks}>Add</button>
    </div>)
}

export default Input