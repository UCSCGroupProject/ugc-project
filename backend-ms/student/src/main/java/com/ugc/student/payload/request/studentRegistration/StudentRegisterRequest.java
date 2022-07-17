package com.ugc.student.payload.request.studentRegistration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentRegisterRequest {
    private NICAndExamDetailsRequest nicAndExamDetailsRequest;
    private StudentDetailsRequest studentDetailsRequest;
    private LoginDetailsRequest loginDetailsRequest;
}
