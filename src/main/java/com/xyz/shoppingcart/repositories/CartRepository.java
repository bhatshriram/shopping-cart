package com.xyz.shoppingcart.repositories;

import com.xyz.shoppingcart.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
