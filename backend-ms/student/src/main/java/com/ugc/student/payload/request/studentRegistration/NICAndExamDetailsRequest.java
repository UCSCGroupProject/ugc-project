package com.ugc.student.payload.request.studentRegistration;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class NICAndExamDetailsRequest {
    @NotBlank
    private String nic;
    private String confirmNic;
    private String nicDateOfIssue;
    private String indexNo;
    private String usedIDType;
    private String usedIDNo;
    private String usedIDDateOfIssue;
    private String usedIDCopy;
}
