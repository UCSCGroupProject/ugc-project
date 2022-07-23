package com.ugc.staff.Payload.Request.StaffRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class StaffRegisterRequest {
    //    Role Details
    private String officeDept;
    private String role;

    //    Personal Details
    private String title;
    private String nameWithInitials;
    private String fullName;
    private Date dob;
    private String address;
    private String phoneNumber;
    private String homeNumber;
    private String gender;

    //    Login Details
    private String username;
    private String email;
    private String password;
}
