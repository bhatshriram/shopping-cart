import axios from 'axios';
const apiURL = "http://localhost:8080/api/v1";

// Execute shopping-cart web api's. 
export class ShoppingCart {

    public static getProducts(categoryId?: number) {

        return new Promise<Object>((resolve, reject) => {
            if (categoryId === undefined) {
                axios.get(apiURL + '/Product')
                    .then((response) => {
                        resolve(response.data.body);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            } else {
                axios.get(apiURL + '/Product?category=' + categoryId)
                    .then((response) => {
                        resolve(response.data.body);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            }

        })
    }

    public static addToCart(customerId: number, productId: number) {

        return new Promise<Object>((resolve, reject) => {
            axios.post(apiURL + '/Cart/' + customerId + '/' + productId)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static getCartProduct(customerId: number) {

        return new Promise<Object>((resolve, reject) => {
            axios.get(apiURL + '/Cart/' + customerId)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static deleteCartProduct(customerId: number, productId: number, allMatch: Boolean) {

        return new Promise<Object>((resolve, reject) => {
            axios.delete(apiURL + '/Cart/' + customerId + '/' + productId + '/' + allMatch)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

}