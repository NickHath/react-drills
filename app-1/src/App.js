import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { term: '' };
  }
  render() {
    return (
      <div className="App">
        <input onChange={ e => this.setState({ term: e.target.value }) }/>
        { this.state.term }
      </div>
    );
  }
}

export default App;
