package com.gureumworld.gureum.controller;

import com.gureumworld.gureum.config.JwtUtil;
import com.gureumworld.gureum.dto.LoginRequest;
import com.gureumworld.gureum.dto.SignUpRequest;
import com.gureumworld.gureum.entity.User;
import com.gureumworld.gureum.repository.UserRepository;
import com.gureumworld.gureum.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.OutputKeys;
import java.util.HashMap;
import java.util.Map;
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

    @GetMapping("/checkId")
    public ResponseEntity<Map<String, Object>> checkId(@RequestParam String loginId) {
        boolean isExist = userService.checkId(loginId);

        Map<String, Object> response = new HashMap<>();
        response.put("available", !isExist);
        response.put("message", isExist ? "이미 사용 중인 아이디입니다." : "사용 가능한 아이디입니다.");

        return ResponseEntity
                .status(isExist ? HttpStatus.CONFLICT : HttpStatus.OK)
                .body(response);
    }

    @PostMapping("/signUp")
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest signUpRequest) {
        try {
            userService.signUp(signUpRequest);
            return ResponseEntity.ok("회원가입 성공");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("서버 오류로 회원가입 실패");
        }
    }
}