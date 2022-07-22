package com.ugc.staff.Payload.Request.StaffRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PersonalDetailsRequest {
    private String title;
    private String nameWithInitials;
    private String fullName;
    private Date dob;
    private String address;
    private String phoneNumber;
    private String homeNumber;
    private String gender;
}
