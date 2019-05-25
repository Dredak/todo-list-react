import React from "react";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { task, deleteTask } = this.props;

        return (
            <div className="task">
                <h3>{task.content}</h3>
                <span onClick={()=>deleteTask(task.id)}>X</span>
            </div>
        )
    }
}

export default Task;