import React, { Component } from 'react'

import '../index.css'

import { ShoppingCart } from '../../../services/shoppingCartService';

interface IProps {
  product?:any
}

interface IState { }


export class Product extends Component<IProps>{

  private addToCart(product: any) {
    console.log(product);
    ShoppingCart.addToCart(1, product)
    .then((res) => {
     alert("Product added to your cart!")
    })
    .catch(()=> {
      alert("Error occured while adding product to cart!")
    })
  }

  render() {

    const { product } = this.props;
    console.log('individual')
    console.log(product);
    return (

      <div>
        <div key={'product.id'} className="item">
          <div className="product-img">
            <img alt={'product.name'} src={product.imageURL} />
          </div>
          <div className="product-details">
            <h1 id="product-name">{product.productName}</h1>
            <h4 id="product-description">{product.productDescription}</h4>
          </div>
          <div className="price-add">
            <h3 id="product-price" className="fa fa-inr">{product.price}</h3>
          </div>
          <div className="center">
            <div className="btnAddToCart" onClick={() => this.addToCart(product)}>Add to Cart</div>
          </div>
        </div>

      </div>
    )
  }
}

export default Product

