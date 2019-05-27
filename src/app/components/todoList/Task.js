import React from "react";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { task, deleteTask, toggleCompleted } = this.props;
        const sport = task.category === "sport" ? <i className="fas fa-futbol"></i> : "";
        const bussines = task.category === "business" ? <i className="fas fa-briefcase"></i> : "";
        const social = task.category === "social" ? <i className="fas fa-user-friends"></i> : "";

        return (
            <div className="task">
                <input type="checkbox" onChange={() => toggleCompleted(task.id)} />
                <p className={task.completed ? "content completed" : "content"}>{task.content}</p> 
                <small>{sport || bussines || social}</small> 
                <p className="remove" onClick={() => deleteTask(task.id)}>Remove</p>
            </div>
        )
    }
}

export default Task;