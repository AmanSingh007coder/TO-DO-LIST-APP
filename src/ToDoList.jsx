import React, {useState} from 'react';


function ToDoList() {

const [tasks, settasks] = useState(["eat", "sleep", "code"]);
const [newtasks, setnewtasks] = useState();


const inputchange = (e) => {
setnewtasks(e.target.value);
}

const addtask = (e) => {

    if(newtasks.trim() !== ""){
         settasks([...tasks, newtasks]);
         setnewtasks("");
    }
}

const removetask = (index) => {
   const updatedtask = tasks.filter((_, i) => i !== index);
   settasks(updatedtask);
}

const moveup = (index) => {
    if(index>0){
    const updatedtasks = [...tasks];
    [updatedtasks[index], updatedtasks[index-1]] = 
    [updatedtasks[index-1], updatedtasks[index]];
    settasks(updatedtasks);
}
}

const movedown = (index) => {
    if(index<tasks.length-1){
        const updatedtasks = [...tasks];
        [updatedtasks[index], updatedtasks[index+1]] = 
        [updatedtasks[index+1], updatedtasks[index]];
        settasks(updatedtasks);
    }
}

return(

    <>
   
    <div className = "to-do-app">

    <h1>TO - DO - LIST</h1>
    
    <div className = "input-container">
         <input type="text" value = {newtasks} placeholder = "Enter the Task" className = "input" onChange = {inputchange} />
         <button onClick = {addtask} className = "add-task-button">Add Task</button>
    </div>

      <ol>
        {tasks.map((task, index) =>
             <li key = {index}>
             <span className = "text">{task}</span>
             <button  className = "delete-button" onClick = {() => removetask(index)}>DELETE</button>
             <button className = "move-button" onClick = {() => moveup(index)}>👆</button>
             <button className = "move-button" onClick = {() => movedown(index)}>👇</button>
             </li>)}
      </ol>


   </div>
    </>
);


}

export default ToDoList;