package com.ugc.student.payload.request.universityAdmission;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Step3FormRequest {
    private String candidateType;

    private String schoolName;
    private String schoolAddress;
    private String schoolAdministrativeDistrict;
    private String schoolTelephone;
    private String schoolDateOfAdmission;

    private List<AdditionalSchoolRequest> additionalSchools;

    private Boolean alreadyRegisteredAsInternalStudent;
    private Boolean alreadyReceivedForeignScholarships;

    private String username;
}
