package com.gureumworld.gureum.service;

import com.gureumworld.gureum.config.JwtUtil;
import com.gureumworld.gureum.dto.LoginRequest;
import com.gureumworld.gureum.entity.User;
import com.gureumworld.gureum.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    public String authenticate(LoginRequest request) {
        User user = userRepository.findById(request.getUsername())
                .orElseThrow(() -> new RuntimeException("사용자 없음"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("비밀번호 틀림");
        }

        return jwtUtil.generateToken(user.getUsername());
    }
}
