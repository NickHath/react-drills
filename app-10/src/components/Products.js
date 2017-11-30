import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/products`)
         .then(res => this.setState({ products: res.data }))
  }

  render() {
    const displayProducts = this.state.products.map((product, index) => {
      return (
        <Link to={ `/details/${product.id}` } className='nostyle'>
          <div className='product' key={ index }>
            <h1>{ product.title }</h1>
            <h3>by { product.company }</h3>
            <h3>${ product.price }</h3>
            <img src={ product.image } alt='product'/>
            <p>{ product.desc }</p>
          </div>
        </Link>
      )
    })
    console.log(this.state);
    return (
      <div className='allProducts'>
        { displayProducts }
      </div>
    )
  }
}