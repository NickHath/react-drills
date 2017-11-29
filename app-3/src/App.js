import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      animals: ['dog', 'beta fish', 'cat', 'lion', 'dolphin', 'shark', 'guinea pig'],
    }
  }

  handleChange(term) {
    this.setState({ term });
  }

  render() {
    let displayAnimals = this.state.animals.filter(animal => animal.includes(this.state.term));
    const allAnimals = displayAnimals.map(animal => <h2>{ animal }</h2>)
    return (
      <div className="App">
        <input onChange={ e => this.handleChange(e.target.value) }/>
        { allAnimals }
      </div>
    );
  }
}

export default App;
