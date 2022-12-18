package com.rh.cordillera.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rh.cordillera.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    
}