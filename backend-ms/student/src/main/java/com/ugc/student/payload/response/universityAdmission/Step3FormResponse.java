package com.ugc.student.payload.response.universityAdmission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class Step3FormResponse {
    private String candidateType;

    private String schoolName;
    private String schoolAddress;
    private String schoolAdministrativeDistrict;
    private String schoolTelephone;
    private String schoolDateOfAdmission;

    private List<AdditionalSchoolResponse> additionalSchools;

    private Boolean alreadyRegisteredAsInternalStudent;
    private Boolean alreadyReceivedForeignScholarships;
}
