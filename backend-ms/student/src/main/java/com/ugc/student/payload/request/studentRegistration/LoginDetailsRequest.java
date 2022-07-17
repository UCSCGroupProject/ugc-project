package com.ugc.student.payload.request.studentRegistration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDetailsRequest {
    private String email;
    private String phone;
    private String password;
    private String confirmPassword;
}
