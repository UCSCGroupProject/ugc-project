package com.ugc.staff.Payload.Response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class JWTResponse {
    private String token;
    private String type = "staff";
    private Long id;
    private String username;
    private String email;
    private List<String> roles;

    public JWTResponse(String token, Long id, String username, String email, List<String> roles) {
        this.token = token;
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
}
