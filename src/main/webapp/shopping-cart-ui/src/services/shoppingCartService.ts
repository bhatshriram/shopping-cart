import axios from 'axios';

// Execute shopping-cart web services. 
export class ShoppingCart {

    public static getProducts(categoryId?: number) {

        return new Promise<Object>((resolve, reject) => {

            if (categoryId === undefined) {
                axios.get('http://localhost:8080/api/v1/Product')
                    .then((response) => {
                        resolve(response.data.body);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            } else {
                axios.get('http://localhost:8080/api/v1/Product?category=' + categoryId)
                    .then((response) => {
                        resolve(response.data.body);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            }

        })
    }

    public static addToCart(customerId:number, product:Object) {

        return new Promise<Object>((resolve, reject) => {

            axios.post('http://localhost:8080/api/v1/Cart/'+customerId, product)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static getCartProduct(customerId:number) {

        return new Promise<Object>((resolve, reject) => {

            axios.get('http://localhost:8080/api/v1/Cart/'+customerId)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static deleteCartProduct(customerId:number, productId:number, allMatch:Boolean) {

        return new Promise<Object>((resolve, reject) => {

            axios.delete('http://localhost:8080/api/v1/Cart/'+customerId+'/'+productId+'/'+allMatch)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

}