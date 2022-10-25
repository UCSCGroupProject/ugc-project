package com.ugc.student.payload.request.studentRegistration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentRegisterRequest {
//    private NICAndExamDetailsRequest nicAndExamDetailsRequest;
    private String nic;
    private Date nicDateOfIssue;
    private String indexNo;
    private String usedIDType;
    private String usedIDNo;
    private Date usedIDDateOfIssue;
    private String usedIDCopy;

//    private StudentDetailsRequest studentDetailsRequest;
    private String title;
    private String nameWithInitials;
    private String fullName;
    private Date dob;
    private String pob;
    private String civilStatus;
    private String gender;
    private String phone;

//    private LoginDetailsRequest loginDetailsRequest;
    private String username;
    private String email;
    private Set<String> role;
    private String password;
}
