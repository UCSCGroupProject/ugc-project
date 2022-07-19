package com.ugc.student.payload.request.studentRegistration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Getter
@Setter
public class NICAndExamDetailsRequest {
    private String nic;
    private Date nicDateOfIssue;
    private String indexNo;
    private String usedIDType;
    private String usedIDNo;
    private Date usedIDDateOfIssue;
    private String usedIDCopy;
}
