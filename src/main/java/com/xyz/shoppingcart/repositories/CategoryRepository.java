package com.xyz.shoppingcart.repositories;

import com.xyz.shoppingcart.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
