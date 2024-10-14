import React, {useState} from "react";

function ActionButtons({tasks, setTasks, index}){

    function removeTasks(index){
        const tasksAfterDelete = tasks.filter((_,i) => i !== index);
        setTasks(tasksAfterDelete);
    }
    function taskUp(index){
        if(0 < index){
            const tasksAfterUp = [...tasks];
            [tasksAfterUp[index], tasksAfterUp[index-1]] = [tasksAfterUp[index-1], tasksAfterUp[index]];
            setTasks(tasksAfterUp);
        }
    }
    function taskDown(index){
        if(tasks.length-1 > index){
            const tasksAfterDown = [...tasks];
            [tasksAfterDown[index], tasksAfterDown[index+1]] = [tasksAfterDown[index+1], tasksAfterDown[index]];
            setTasks(tasksAfterDown);
        }
    }
    return(<div>
        <button className="upButton" onClick={() => taskUp(index)}>⬆</button>
        <button className="downButton" onClick={() => taskDown(index)}>⬇</button>
        <button className="removeButton" onClick={() => removeTasks(index)}>X</button>
    </div>);
}

export default ActionButtons