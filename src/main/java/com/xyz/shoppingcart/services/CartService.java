package com.xyz.shoppingcart.services;

import com.xyz.shoppingcart.models.Cart;
import com.xyz.shoppingcart.models.Product;
import com.xyz.shoppingcart.repositories.CartRepository;
import com.xyz.shoppingcart.repositories.ProductRepository;
import com.xyz.shoppingcart.validator.ProductValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Component
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductValidator productValidator;

    @Autowired
    private ProductRepository productRepository;

    // Add product to cart repository
    public Cart addToCart(Long customerId, Long productId) throws Exception {
        productValidator.validateCustomer(customerId);
        Cart cart = new Cart();
        List<Cart> carts= cartRepository.findAll();
       for(Cart item:carts) {
           if(item.getCustomerId().equals(customerId)) {
               cart=item;
           } else {
               throw new Exception("Customer is not Present!");
           }
       }

       List<Product> existingProducts= cart.getProducts();
       Product product= productRepository.getOne(productId);
       existingProducts.add(product);
       cart.setProducts(existingProducts);
       cart.setTotalPrice(totalCartProductPrice(existingProducts));
       return cartRepository.saveAndFlush(cart);
    }

    // Get all products from cart
    public Cart getCartProducts(Long customerId) throws Exception {
        productValidator.validateCustomer(customerId);
        return cartRepository.getOne(customerId);
    }

    // Delete product from cart.
    // Remove all products matching product id from cart if allMatch is true.
    // Remove single product matching product id from cart if allMatch is false.
    public Cart deleteProductFromCart(Long customerId, Long productId, Boolean allMatch) throws Exception {
        productValidator.validateCustomer(customerId);
        productValidator.validateProduct(productId);
        Cart cart = new Cart();
        List<Cart> carts= cartRepository.findAll();
        for(Cart item:carts) {
            if(item.getCustomerId().equals(customerId)) {
                cart=item;
            } else {
                throw new Exception("Customer is not Present!");
            }
        }
        List<Product> existingProducts= cart.getProducts();
        existingProducts=this.removeProductFromList(existingProducts,productId,allMatch);
        cart.setProducts(existingProducts);
        cart.setTotalPrice(totalCartProductPrice(existingProducts));
        return cartRepository.saveAndFlush(cart);
    }

    // Returns total price of cart products.
    private float totalCartProductPrice(List<Product> products) {
        AtomicReference<Float> totalPrice= new AtomicReference<>(0f);
        products.forEach((product -> {
            totalPrice.updateAndGet(v -> new Float((float) (v + product.getPrice())));
        }));
        return totalPrice.get();
    }

    // Returns the remaining product from the cart based on allMath flag.
    private List<Product> removeProductFromList(List<Product> products,Long productId, Boolean allMath) {
        if(allMath) {
            products= products.stream().filter(product ->
                    product.getProductId()!=productId).collect(Collectors.toList());
        }
        else {
            for(Product product: products) {
                if(product.getProductId().equals(productId)) {
                    products.remove(product);
                    break;
                }
            }
        }
        return products;
    }
}
