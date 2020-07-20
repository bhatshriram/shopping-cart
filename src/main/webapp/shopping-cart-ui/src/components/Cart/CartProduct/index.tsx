import React, { Component } from 'react'

import '../index.css'
import { ShoppingCart } from '../../../services/shoppingCartService'

interface IProps {
    product: any
}

interface Istate {
    cart: any,
    productCount: number
}

export class CartProduct extends Component<IProps,Istate> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            cart:{},
            productCount:1
        }
    }

    removeProduct(product: any) {
        ShoppingCart.deleteCardProduct(1, product.productId)
            .then((res) => {
                this.setState({ cart: res })
                window.location.reload(true);
                alert("Cart Item deleted successfully!");
            })
            .catch(() => {
                alert("Error while deleting cart item");
            })
    }

    handleAddProduct(product: any) {
        ShoppingCart.addToCart(1, product)
        .then((res) => {
         alert("Product added to your cart!")
         this.setState({productCount: (this.state.productCount+1)});
        })
        .catch(()=> {
          alert("Error occured while adding product to cart!")
        })
        
    }

    render() {
        const { product } = this.props;
        return (
            <div className='cart-item'>
                <table>
                    <tr>
                        <td style={{ width: "20%" }}>
                            <div className="img">
                                <img alt={'product.name'} src={product.imageURL} />
                            </div>
                        </td>
                        <td style={{ width: "30%" }}>
                            <div className='items-text' style={{ fontWeight: "bold" }} >{product.productName}</div>
                            <div className='items-text'>{product.productDescription}</div>
                            <div className='items-text'>Price: <span className='fa fa-inr'>{product.price}</span></div>
                        </td>
                        <td className="item-count" style={{ width: "13%" }}>
        <div style={{ fontWeight: "bold" }} >Total Item: <span>{this.state.productCount}</span></div>
                            <br />
                            <div className="plusButton" onClick={() => {this.handleAddProduct(product)}}>+</div>

                        </td>
                        <td style={{ width: "30%" }}>
                            <div className='buttonItem' onClick={() => { this.removeProduct(product) }} >Remove</div>
                        </td>
                    </tr>
                </table>


            </div>
        )
    }
   

}

export default CartProduct
