# Shopping Cart Application
This application is to add, update the number of quantity and delete product(s) from cart.

## Technology Stack
* **Back end**  -   *Java Spring Boot.*
* **Front End** -   *React with Typescript.*
* **Database**  -   *In memory H2 database.*

## How to Run

Clone the repository below into your local machine:
`https://github.com/bhatshriram/shopping-cart.git`

Open it in your favorite IDE and run as spring boot application.

Once the application gets started, the api's are available on port number 8080.

To run the UI, open the directory below in your terminal.
`{local-cloned-dir}/shopping-cart\src\main\webapp\shopping-cart-ui`
And type the commands below:
`npm install` - To install dependencies.
`npm start`   - To run the application.

The application UI will be available on the URL below:
`http://localhost:3000/`
 
![shopping-cart-application](https://raw.githubusercontent.com/bhatshriram/shopping-cart/master/shopping-cart.gif)

## Available API's

* Get: getAllProducts           - http://localhost:8080/api/v1/Product
* Get: getAllProducts           - http://localhost:8080/api/v1/Product?category={categoryId}
* Post: addToCart               - http://localhost:8080/api/v1/Cart/{customerId}/{productId}
* Get: getCartProducts          - http://localhost:8080/api/v1/Cart/{customerId}
* Delete: deleteProductFromCart - http://localhost:8080/api/v1/Cart/{customerId}/{productId}/{allMatch}
                                  allMatch= True -> Deletes all products matching product id from cart.
                                  allMatch= False -> Deletes single product matching product id from cart.
                                  
## Contributor

<div>
<a href="https://github.com/bhatshriram"><img 
src="https://avatars1.githubusercontent.com/u/47271680?v=4" 
width="100px;" alt="Shriram Bhat"/><br /><sub><b>Shriram Bhat</b></sub></a><br />
<a href="#" title="Ideas, Planning">🤔</a> 
<a href="#" title="Content">🖋</a>
<a href="#" title="Code">💻</a>
<a href="#" title="Bug reports">🐛</a>
</div>