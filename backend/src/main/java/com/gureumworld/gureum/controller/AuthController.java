package com.gureumworld.gureum.controller;

import com.gureumworld.gureum.config.JwtUtil;
import com.gureumworld.gureum.dto.LoginRequest;
import com.gureumworld.gureum.entity.User;
import com.gureumworld.gureum.repository.UserRepository;
import com.gureumworld.gureum.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String token = userService.authenticate(loginRequest);
        return ResponseEntity.ok().body(token);
    }
}