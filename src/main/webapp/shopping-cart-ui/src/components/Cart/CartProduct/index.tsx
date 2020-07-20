import React, { Component } from 'react'

import '../index.css'
import { ShoppingCart } from '../../../services/shoppingCartService'

interface IProps {
    product: any,
    productCount: number
}

export class CartProduct extends Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    handleRemoveProduct(productId: any, allMatch: boolean) {
        ShoppingCart.deleteCartProduct(1, productId,allMatch)
            .then((res) => {
                window.location.reload(true);
                alert("Successfully removed the product!");
            })
            .catch(() => {
                alert("Error while deleting cart item");
            })
    }

    handleAddProduct(product: any) {
        ShoppingCart.addToCart(1, product)
        .then((res) => {
         alert("Successfully added the product!")
         window.location.reload(true);
        })
        .catch(()=> {
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
                            <div style={{display:'flex'}}>
                            <div className="addRemoveButton" onClick={() => {this.handleRemoveProduct(JSON.parse(product).productId, false)}}>-</div>
                            <div className="addRemoveButton" onClick={() => {this.handleAddProduct(JSON.parse(product))}}>+</div>
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
