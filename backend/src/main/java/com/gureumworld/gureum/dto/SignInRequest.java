package com.gureumworld.gureum.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignInRequest {
   private String loginId;
   private String username;
   private String email;
   private String password;
}