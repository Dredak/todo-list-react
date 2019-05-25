import React from "react";
import Task from "./Task";
import idGenerator from "react-id-generator";
import AddTask from "./AddTask";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    id: idGenerator(),
                    content: "neki tekst",
                    completed: false
                },
                {
                    id: idGenerator(),
                    content: "neki drugi tekst",
                    completed: false
                }
                ,
                {
                    id: idGenerator(),
                    content: "neki treci tekst",
                    completed: false
                }
            ],
            searchValue:""
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




    render() {
        const { tasks, searchValue } = this.state;
        const todos = tasks.map((task) => {
            return <Task key={task.id} task={task} deleteTask={this.deleteTask} />
        });

        return (
            <>
                <AddTask createNewTask={this.createNewTask} searchValue={searchValue} setSearchValue={this.setSearchValue}/>
                {todos}
            </>
        )
    }
}

export default TodoList;