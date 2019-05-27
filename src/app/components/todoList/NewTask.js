import React from "react";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        const { createNewTask, searchValue, setSearchValue, setCategory } = this.props;

        return (
            <>
                <div className="add-task">
                    <input type="search" value={searchValue} onChange={setSearchValue} placeholder="Add Task" />
                    <button onClick={createNewTask}>Add</button>
                </div>
                <div className="category">
                    <p> Choose category:</p>
                    <label htmlFor="sport" className="category-item"> sport</label>
                    <input type="radio" name="category" value="sport" id="sport" onClick={setCategory} />
                    <label htmlFor="business" className="category-item">business</label>
                    <input type="radio" name="category" value="business" id="business" onClick={setCategory} />
                    <label htmlFor="social" className="category-item">social</label>
                    <input type="radio" name="category" value="social" id="social" defaultChecked onClick={setCategory} />
                </div>
            </>
        )
    }
}


export default NewTask;