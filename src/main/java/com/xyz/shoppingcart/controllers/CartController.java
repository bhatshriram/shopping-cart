package com.xyz.shoppingcart.controllers;

import com.xyz.shoppingcart.models.Cart;
import com.xyz.shoppingcart.models.Product;
import com.xyz.shoppingcart.services.CartService;
import com.xyz.shoppingcart.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/Cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    // Adds product to cart.
    @RequestMapping(value="{customerId}/{productId}", method = RequestMethod.POST)
    public ResponseEntity<ApiResponse> addToCart(@PathVariable("customerId") Long customerId,
                                                 @PathVariable("productId") Long productId){
        ApiResponse apiResponse= new ApiResponse();
        HttpStatus status = null;
        try {
            apiResponse.setBody(cartService.addToCart(customerId, productId));
            apiResponse.setStatusCode(200);
            status= HttpStatus.ACCEPTED;
            apiResponse.setMessage("Product added to cart Successfully!");
        }
        catch (Exception e) {
            apiResponse.setStatusCode(404);
            status= HttpStatus.NOT_FOUND;
            apiResponse.setError(e.getMessage());
        }
        return new  ResponseEntity<ApiResponse>(apiResponse, status);
    }

    @RequestMapping(value="{customerId}", method = RequestMethod.GET)
    public  ResponseEntity<ApiResponse> getCartProducts(@PathVariable Long customerId) throws Exception{
        ApiResponse apiResponse= new ApiResponse();
        HttpStatus status = null;
        try {
            Cart cart= cartService.getCartProducts(customerId);
            apiResponse.setBody(cart);
            apiResponse.setStatusCode(200);
            status= HttpStatus.ACCEPTED;
            apiResponse.setMessage("Cart product Fetched Successfully!");
        }
        catch (Exception e) {
            apiResponse.setStatusCode(404);
            status= HttpStatus.NOT_FOUND;
            apiResponse.setError(e.getMessage());
        }
        return new ResponseEntity<ApiResponse>(apiResponse,status);
    }

    @RequestMapping(value="{customerId}/{productId}/{allmatch}", method = RequestMethod.DELETE)
    public  ResponseEntity<ApiResponse> deleteProductFromCart(@PathVariable("customerId") Long customerId,
    @PathVariable("productId") Long productId, @PathVariable("allmatch") Boolean allmatch) throws Exception{
        ApiResponse apiResponse= new ApiResponse();
        HttpStatus status = null;
        try {
            Cart cart= cartService.deleteProductFromCart(customerId, productId, allmatch);
            apiResponse.setBody(cart);
            apiResponse.setStatusCode(200);
            status= HttpStatus.ACCEPTED;
            apiResponse.setMessage("Product deleted Successfully!");
        }
        catch (Exception e) {
            apiResponse.setStatusCode(404);
            status= HttpStatus.NOT_FOUND;
            apiResponse.setError(e.getMessage());
        }
        return new ResponseEntity<ApiResponse>(apiResponse,status);
    }
}
