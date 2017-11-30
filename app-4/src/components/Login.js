import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(key, value) {
    let updatedState = {};
    updatedState[key] = value;
    this.setState(updatedState);
  }

  handleClick() {
    alert(`username: ${this.state.user}\npassword: ${this.state.password}`)
  }

  render() {
    console.log(this.state);
    return (
      <div className='login'>
        <input placeholder='username'
               onChange={ e => this.handleChange('user', e.target.value) }/>
        <input placeholder='password'
               onChange={ e => this.handleChange('password', e.target.value) }/>
        <button onClick={ this.handleClick }>Login</button>
      </div>
    )
  }
}