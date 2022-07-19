package com.ugc.student.payload.request.studentRegistration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class StudentDetailsRequest {
    private String title;
    private String nameWithInitials;
    private String fullName;
    private Date dob;
    private String pob;
    private String civilStatus;
    private String gender;
    private String phone;
}
