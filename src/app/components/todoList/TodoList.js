import React from "react";
import Task from "./Task";
import idGenerator from "react-id-generator";
import AddTask from "./AddTask";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            searchValue: ""
        }
    }

    createNewTask = () => {
        const newTask = {
            id: idGenerator(),
            content: this.state.searchValue,
            completed: false
        }
        this.setState(
            {
                tasks: [...this.state.tasks, newTask],
                searchValue: ""
            })
    }

    setSearchValue = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter((task) => {
            return task.id !== id
        });
        this.setState({ tasks: tasks });
    }

    toggleCompleted = (id) => {
        this.setState({
            tasks: this.state.tasks.map((task) => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task;
            })
        })
    }




    render() {
        const { tasks, searchValue } = this.state;
        const todos = tasks.map((task) => {
            return <Task key={task.id} task={task} deleteTask={this.deleteTask} toggleCompleted={this.toggleCompleted} />
        });

        return (
            <>
                <AddTask createNewTask={this.createNewTask} searchValue={searchValue} setSearchValue={this.setSearchValue} />
                {todos}
            </>
        )
    }
}

export default TodoList;