package com.gureumworld.gureum.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "user")
public class User {
    @Id
    private String loginId;
    private String username;
    private String password;
    private String email;
    private String role = "ROLE_USER";
    private String type = "BASIC";
}
