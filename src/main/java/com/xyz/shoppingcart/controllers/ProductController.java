package com.xyz.shoppingcart.controllers;

import com.xyz.shoppingcart.services.ProductService;
import com.xyz.shoppingcart.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/Product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse> getProducts() {
        ApiResponse apiResponse= new ApiResponse();
        HttpStatus status = null;
        try {
            apiResponse.setBody(productService.getAllProducts());
            apiResponse.setStatusCode(200);
            status= HttpStatus.ACCEPTED;
            apiResponse.setMessage("Products Fetched");
        }
        catch (Exception e) {
            apiResponse.setStatusCode(404);
            status= HttpStatus.NOT_FOUND;
            apiResponse.setError(e.getMessage());
        }
        return new ResponseEntity<ApiResponse>(apiResponse, status);
    }

    @GetMapping
    @RequestMapping(name="{category}")
    public ResponseEntity<ApiResponse> getProducts(@PathVariable Long categoryId) {
        ApiResponse apiResponse= new ApiResponse();
        HttpStatus status = null;
        try {
            apiResponse.setBody(productService.getAllProducts(categoryId));
            apiResponse.setStatusCode(200);
            status= HttpStatus.ACCEPTED;
            apiResponse.setMessage("Products Fetched");
        }
        catch (Exception e) {
            apiResponse.setStatusCode(404);
            status= HttpStatus.NOT_FOUND;
            apiResponse.setError(e.getMessage());
        }
        return new ResponseEntity<ApiResponse>(apiResponse, status);
    }

//    @GetMapping()
//    @RequestMapping(value = "{id}")
//    public Product getProductById(@PathVariable Long id) {
//        return productRepository.getOne(id);
//    }

//    @PostMapping()
//    public Product addProduct(@RequestBody Product product) {
//        return productRepository.saveAndFlush(product);
//    }

//    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
//    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
//        Product existingProduct= productRepository.getOne(id);
//        BeanUtils.copyProperties(product, existingProduct,"productId");
//        return productRepository.saveAndFlush(existingProduct);
//    }
//
//    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
//    public String updateProduct(@PathVariable Long id) {
//        productRepository.deleteById(id);
//        return "Product deleted successfully!";
//    }


}
