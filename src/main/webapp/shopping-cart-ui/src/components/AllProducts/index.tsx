import React, { Component } from 'react'
import './index.css'
import Product from './Product';
// @ts-ignore
import map from 'lodash/map';
import { ShoppingCart } from '../../services/shoppingCartService';

interface Props {
}

interface IState {
    products: {}
}

export class AllProducts extends Component<Props, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ShoppingCart.getProducts()
            .then((res) => {
                this.setState({ products: res })
            })
            .catch((error) => {
                alert("Error occured while fetching the product!")
            })
    }

    render() {
        let items: any[] = [];
        map(this.state.products, (product: any) => {
            items.push(<Product product={product} />);
        })

        return (
            <div className="items">
                {items}
            </div>
        )
    }
}

export default AllProducts
