import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['mow the lawn', 'walk the dog', 'do the dishes']
    }
  }
  render() {
    const allTasks = this.state.tasks.map((task, index) => <h2 key={ index }>{ task }</h2>)
    return (
      <div className="App">
        { allTasks }
      </div>
    );
  }
}

export default App;
