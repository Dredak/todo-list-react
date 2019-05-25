import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    

    render() {
        const { createNewTask, searchValue, setSearchValue } = this.props;

        return (
            <div className="add-task">
                <input type="search" value={searchValue} onChange={setSearchValue} />
                <button onClick={createNewTask}>AddTask</button>
            </div>
        )
    }
}


export default AddTask;