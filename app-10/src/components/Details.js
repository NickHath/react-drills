import React, { Component } from 'react';
import axios from 'axios';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    let productId = this.props.match.params.id;
    axios.get(`https://practiceapi.devmountain.com/products/${productId}`)
         .then(res => this.setState({ product: res.data }));
  }

  render() {
    console.log(this.state);
    return (
      <div className='details'>
        <h1>{ this.state.product.title }</h1>
        <h3>by { this.state.product.company }</h3>
        <h3>${ this.state.product.price }</h3>
        <img src={ this.state.product.image } alt='product'/>
        <p>{ this.state.product.desc }</p>
      </div>
    )
  }
}