import ActionButtons from "./actions.jsx"

function List({tasks, setTasks}){
    return(
    <ul>
        {tasks.map((task,index) => 
        <li key={index}>
            <span className="text">{task}</span>   
            <ActionButtons tasks={tasks} setTasks={setTasks} index={index}/>
        </li>
        )} 
    </ul>)
}

export default List