import React, { Component } from 'react';
import Image from './components/Image';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: 'http://via.placeholder.com/350x150'
    }
  }
  render() {
    return (
      <div className="App">
        <Image imgUrl={ this.state.imgUrl }/>
      </div>
    );
  }
}

export default App;
