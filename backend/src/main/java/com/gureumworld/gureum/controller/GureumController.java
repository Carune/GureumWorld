package com.gureumworld.gureum.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/gureum")
public class GureumController {

    @GetMapping("/profile")
    public Map<String, String> getProfile() {
        Map<String, String> profile = new HashMap<>();
        profile.put("name", "구름");
        profile.put("breed", "Bichon Frise");
        profile.put("age", "2");
        return profile;
    }
}