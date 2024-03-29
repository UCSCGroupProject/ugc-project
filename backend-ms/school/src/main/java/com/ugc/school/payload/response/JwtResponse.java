package com.ugc.school.payload.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class JwtResponse {
    private String token;
//    private String type = "Bearer";
    private String type = "school";
    private Long id;
    private String username;
    private String email;
    private List<String> roles;

    // Constructor
    public JwtResponse(String token, Long id, String username, String email, List<String> roles) {
        this.token = token;
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
}
