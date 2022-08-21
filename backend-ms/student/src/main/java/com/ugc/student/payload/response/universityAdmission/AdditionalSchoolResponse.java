package com.ugc.student.payload.response.universityAdmission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class AdditionalSchoolResponse {
    private String additionalSchoolName;
    private String additionalSchoolDistrict;
    private String additionalSchoolFrom;
    private String additionalSchoolTo;
}
