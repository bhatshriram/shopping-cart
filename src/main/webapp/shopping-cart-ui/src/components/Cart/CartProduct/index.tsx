import React, { Component } from 'react'

import '../index.css'
import { ShoppingCart } from '../../../services/shoppingCartService'
import { customerId } from '../../../login/login-details';

interface IProps {
    product: any,
    productCount: number,
    handleUpdate: any
}


export class CartProduct extends Component<IProps> {

    handleRemoveProduct(productId: any, allMatch: boolean) {
        ShoppingCart.deleteCartProduct(customerId, productId, allMatch)
            .then((res) => {
                alert("Successfully removed the product!");
                this.props.handleUpdate(res)
            })
            .catch(() => {
                alert("Error while deleting cart item");
            })
    }

    handleAddProduct(productId: any) {
        ShoppingCart.addToCart(customerId, productId)
            .then((res) => {
                alert("Successfully added the product!")
                this.props.handleUpdate(res);
            })
            .catch(() => {
                alert("Error occured while adding product to cart!")
            })

    }

    render() {
        const { product, productCount } = this.props;
        return (
            <div className='cart-item'>
                <table>
                    <tr>
                        <td style={{ width: "20%" }}>
                            <div className="img">
                                <img alt={'product.name'} src={JSON.parse(product).imageURL} />
                            </div>
                        </td>
                        <td style={{ width: "30%" }}>
                            <div className='items-text' style={{ fontWeight: "bold" }} >{JSON.parse(product).productName}</div>
                            <div className='items-text'>{product.productDescription}</div>
                            <div className='items-text'>Price: <span className='fa fa-inr'>{JSON.parse(product).price}</span></div>
                        </td>
                        <td className="item-count" style={{ width: "13%" }}>
                            <div style={{ fontWeight: "bold" }} >Total Item: <span>{productCount}</span></div>
                            <br />
                            <div style={{ display: 'flex' }}>
                                <div className="addRemoveButton" onClick={() => { this.handleRemoveProduct(JSON.parse(product).productId, false) }}>-</div>
                                <div className="addRemoveButton" onClick={() => { this.handleAddProduct(JSON.parse(product).productId) }}>+</div>
                            </div>
                        </td>
                        <td style={{ width: "30%" }}>
                            <div className='buttonItem' onClick={() => { this.handleRemoveProduct(JSON.parse(product).productId, true) }} >Remove</div>
                        </td>
                    </tr>
                </table>


            </div>
        )
    }



}

export default CartProduct
