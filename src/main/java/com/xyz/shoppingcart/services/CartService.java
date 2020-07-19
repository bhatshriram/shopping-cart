package com.xyz.shoppingcart.services;

import com.xyz.shoppingcart.models.Cart;
import com.xyz.shoppingcart.models.Product;
import com.xyz.shoppingcart.repositories.CartRepository;
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

    public Cart addToCart(Long customerId, Product product) throws Exception {
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
       existingProducts.add(product);
       cart.setProducts(existingProducts);
       cart.setTotalPrice(totalCartProductPrice(existingProducts));
       return cartRepository.saveAndFlush(cart);
    }

    public Cart getCartProducts(Long customerId) throws Exception {
        productValidator.validateCustomer(customerId);
        return cartRepository.getOne(customerId);
    }

    public Cart deleteProductFromCart(Long customerId, Long productId) throws Exception {
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
        existingProducts= existingProducts.stream().filter(product ->
                product.getProductId()!=productId).collect(Collectors.toList());
        cart.setProducts(existingProducts);
        cart.setTotalPrice(totalCartProductPrice(existingProducts));
        return cartRepository.saveAndFlush(cart);
    }

    private float totalCartProductPrice(List<Product> products) {
        AtomicReference<Float> totalPrice= new AtomicReference<>(0f);
        products.forEach((product -> {
            totalPrice.updateAndGet(v -> new Float((float) (v + product.getPrice())));
        }));
        return totalPrice.get();
    }
}
