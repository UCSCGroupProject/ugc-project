package com.ugc.school.payload.request.schoolRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class LoginDetailsRequest {
    private String username;
    private String email;
    private Set<String> role;
    private String password;
}
