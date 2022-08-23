package com.ugc.school.payload.request.schoolRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class SchoolRegisterRequest {
    private String name;
    private String address;
    private String district;
    private String phone;

    private String username;
    private String email;
    private String role;
    private String password;
}
