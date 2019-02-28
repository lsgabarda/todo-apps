import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currItem: ' '
    }
  }

  handleInput = (event) => {
    this.setState({
      currItem: event.target.value
    })
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currItem
    if (newItem !== ' ') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currItem: ' '
      })
    }
  }

  deleteItem = i => {
    this.setState({
      items: this.state.items.filter((item) => {
        return item === i;
      })
    })
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          handleInput={this.handleInput}
          currItem={this.state.currItem} />

        <TodoItems list={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
