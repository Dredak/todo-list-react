import React from "react";

const Task = (props) => {
        
        const { task, deleteTask, toggleCompleted } = props;
        const sport = task.category === "sport" ? <i className="fas fa-futbol"></i> : "";
        const business = task.category === "business" ? <i className="fas fa-briefcase"></i> : "";
        const social = task.category === "social" ? <i className="fas fa-user-friends"></i> : "";

        return (
            <div className="task">
                <small>{sport || business || social}</small> 
                <input type="checkbox" onChange={() => toggleCompleted(task.id)} />
                <p className={task.completed ? "content completed" : "content"}>{task.content}</p> 
                <p className="remove" onClick={() => deleteTask(task.id)}>Remove</p>
            </div>
        )
}

export default Task;