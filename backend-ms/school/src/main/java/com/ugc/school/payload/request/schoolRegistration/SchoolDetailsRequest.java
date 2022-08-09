package com.ugc.school.payload.request.schoolRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SchoolDetailsRequest {
    private String name;
    private String address;
    private String district;
    private String phone;
}
