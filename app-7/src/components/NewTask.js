import React, { Component } from 'react';

export default class NewTask extends Component {
  constructor() {
    super();
    this.state = { term: '' }
  }

  handleInput(term) {
    this.setState({ term });
  }

  render() {
    return (
      <div className='newTask'>
        <input type='text' 
              placeholder='add new task' 
              onChange={ (e) => this.handleInput(e.target.value) }/>
        <button onClick={ () => this.props.addTask(this.state.term) }>Add Task</button>
      </div>      
    ) 
  }
}