import React, { Component } from 'react'

class TodoItems extends Component {
    render() {
        const renderList = this.props.list.map((value, i) =>
            <li key={i}>{value} <button onClick={this.props.deleteItem}> Delete Me</button></li>
        );
        return (
            <div>
                {renderList}
            </div>
        )
    }
}

export default TodoItems
