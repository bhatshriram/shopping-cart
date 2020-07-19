package com.xyz.shoppingcart.services;

import com.xyz.shoppingcart.models.Product;
import com.xyz.shoppingcart.repositories.ProductRepository;
import com.xyz.shoppingcart.validator.ProductValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductService {


    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductValidator productValidator;

    public List<Product> getAllProducts() throws Exception {
        return productRepository.findAll();
    }

    public List<Product> getAllProducts(Long categoryId) throws Exception {
        productValidator.validateCategory(categoryId);
        return productRepository.findAll().stream().filter(product ->
                product.getCategoryId().equals(categoryId)).collect(Collectors.toList());
    }
}
