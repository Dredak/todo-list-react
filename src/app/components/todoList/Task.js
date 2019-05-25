import React from "react";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { task, deleteTask, toggleCompleted } = this.props;

        return (
            <div className="task">
                <input type="checkbox" onChange={() => toggleCompleted(task.id)} />
                <p className={task.completed ? "content completed" : "content"}>{task.content}</p>
                <p className="remove" onClick={() => deleteTask(task.id)}>Remove</p>
            </div>
        )
    }
}

export default Task;