import React, { Component } from 'react'

class TodoList extends Component {

    render() {

        return (
            <div>
                <form onSubmit={this.props.addItem} >
                    <input type="text" placeholder="Enter a task..."
                        value={this.props.currItem}
                        onChange={this.props.handleInput} />

                    <button type="submit" >
                        Add Task</button>
                </form>


            </div>
        )
    }
}

export default TodoList
