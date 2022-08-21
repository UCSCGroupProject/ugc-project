package com.ugc.student.payload.request.universityAdmission;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdditionalSchoolRequest {
    private String additionalSchoolName;
    private String additionalSchoolDistrict;
    private String additionalSchoolFrom;
    private String additionalSchoolTo;
}
