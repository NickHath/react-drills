import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: ''
    }
    this.addTask = this.addTask.bind(this);
  }

  handleInput(task) {
    this.setState({ newTask: task });
  }

  addTask() {
    this.setState({ tasks: [...this.state.tasks, this.state.newTask], newTask: '' });
  }

  render() {
    return (
      <div className='App'>
        <input value={ this.state.newTask }
               placeholder='new task' 
               onChange={ e => this.handleInput(e.target.value) }/>
        <button onClick={ this.addTask }>Add Task</button>
        <Todo tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;
