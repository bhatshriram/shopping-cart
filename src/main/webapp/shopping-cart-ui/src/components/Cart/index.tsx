import React, { Component } from 'react'
import CartProduct from './CartProduct'
import { ShoppingCart } from '../../services/shoppingCartService'
import './index.css'
// @ts-ignore
import map from 'lodash/map';
import { customerId } from '../../login/login-details';

interface IState {
  cart: any,
  productMap: Map<Object, number>
}

export class Cart extends Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = { cart: {}, productMap: new Map() }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleBuyNowClick(): void {
    alert("Buy Now feature not yet implemented!")
  }

  handleUpdate(res: any) {
    this.state.productMap.clear();
    this.setState({ cart: res });
  }

  componentDidMount() {
    ShoppingCart.getCartProduct(customerId)
      .then((res) => {
        this.setState({ cart: res })
      })
      .catch((err) => {
        alert("Error fetching the cart product!");
      })
  }

  private productMapAssign() {
    map(this.state.cart.products, (product: any) => {
      let count: any = 0;
      if (this.state.productMap.has(JSON.stringify(product))) {
        count = this.state.productMap.get(JSON.stringify(product));
      }
      this.state.productMap.set(JSON.stringify(product), count + 1);
    })
  }

  render() {
    let items: any[] = [];
    this.productMapAssign();
    this.state.productMap.forEach((v, k) => {
      items.push(<CartProduct product={k} productCount={v} handleUpdate={this.handleUpdate} />)
    })

    if (this.state.cart.products !== undefined && this.state.cart.products.length >= 1) {
      return (
        <div className='cart'>
          <div className="cart-items">
            {items}
            <div className='total-price'>
              <div id='total-price'>Total Price: <span className='fa fa-inr'>{this.state.cart.totalPrice}</span></div>
              <div className='buttonItem' onClick={() => this.handleBuyNowClick()}>Buy Now</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="emptyMessage">
          <h1>Your Cart is empty!</h1>
        </div>
      )
    }

  }

}

export default Cart
