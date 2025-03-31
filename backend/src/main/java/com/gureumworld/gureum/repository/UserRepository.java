package com.gureumworld.gureum.repository;

import com.gureumworld.gureum.dto.SignUpRequest;
import com.gureumworld.gureum.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
}