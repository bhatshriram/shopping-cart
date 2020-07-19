import React, { Component } from 'react'
import CartProduct from './CartProduct'
import {ShoppingCart} from '../../services/shoppingCartService'

import './index.css'

// @ts-ignore
import map from 'lodash/map';

interface IState {
  cart:any
}

export class Cart extends Component<{}, IState> {

  constructor(props:any) {
      super(props);
      this.state= {cart:{}}
  }

  handleBuyNowClick(): void {
    alert("Buy Now feature not yet implemented!")
  }

  componentDidMount() {
    ShoppingCart.getCartProduct(1)
    .then((res)=> {
        this.setState({cart:res})
    })
    .catch((err)=> {
      alert("Error fetching the cart product!");
    }) 
  }
    render() {
      let items: any[]=[];
      console.log(this.state.cart);

      map(this.state.cart.products, (product:any)=> {
          items.push(<CartProduct product={product} />)
      });

      if(this.state.cart.products!==undefined && this.state.cart.products.length>=1) {
        return (
          <div className='cart'>
      <div className="cart-items">
              {items}
        <div className='total-price'>
        <div id='total-price'>Total Price: <span className='fa fa-inr'>{this.state.cart.totalPrice}</span></div>
          <div className='buttonItem' onClick={()=> this.handleBuyNowClick()}>Buy Now</div>
          </div>      
      </div>
    </div>
      )
      } else {
        return(
          <div className="emptyMessage">
            <h1>Your Cart is empty!</h1>
          </div>
        )
      }
        
    }
 
}

export default Cart
