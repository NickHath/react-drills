import React, { Component } from 'react';
import NewTask from './components/NewTask';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] }
    this.addTask = this.addTask.bind(this);
  }

  addTask(newTask) {
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  render() {
    return (
      <div className="App">
        <NewTask addTask={ this.addTask }/>
        <Todo tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;
