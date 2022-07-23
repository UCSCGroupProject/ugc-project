package com.ugc.staff.Payload.Request.StaffRegistration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDetailsRequest {
    private String username;
    private String email;
    private String password;
}
