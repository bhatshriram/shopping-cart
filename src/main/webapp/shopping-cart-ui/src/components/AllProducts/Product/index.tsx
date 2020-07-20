import React, { Component } from 'react'
import '../index.css'
import { ShoppingCart } from '../../../services/shoppingCartService'
import { customerId } from '../../../login/login-details'

interface IProps {
  product?: any
}

interface IState { }


export class Product extends Component<IProps>{

  private addToCart(productId: number) {
    ShoppingCart.addToCart(customerId, productId)
      .then((res) => {
        alert("Product added to your cart!")
      })
      .catch(() => {
        alert("Error occured while adding product to cart!")
      })
  }

  render() {
    const { product } = this.props;

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
            <div className="btnAddToCart" onClick={() => this.addToCart(product.productId)}>Add to Cart</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product

