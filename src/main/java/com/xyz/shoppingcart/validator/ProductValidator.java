package com.xyz.shoppingcart.validator;

import com.xyz.shoppingcart.repositories.CategoryRepository;
import com.xyz.shoppingcart.repositories.CustomerRepository;
import com.xyz.shoppingcart.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductValidator {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public void validateCustomer(Long customerId) throws Exception {
        if(!customerRepository.existsById(customerId)) {
            throw new Exception("Customer not found!");
        }
    }

    public void validateProduct(Long productId) throws Exception {
        if(!productRepository.existsById(productId)) {
            throw new Exception("Product not found!");
        }
    }

    public void validateCategory(Long categoryId) throws Exception {
        if(!categoryRepository.existsById(categoryId)) {
            throw new Exception("Category not found!");
        }
    }
}
