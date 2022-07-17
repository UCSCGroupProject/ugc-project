package com.ugc.student.payload.request.studentRegistration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDetailsRequest {
    private String title;
    private String nameWithInitials;
    private String fullName;
    private String dob;
    private String pob;
    private String civilStatus;
    private String gender;
}
