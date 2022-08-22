package com.ugc.student.payload.request.universityAdmission;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Step2FormRequest {
    private String olCategory;
    private String olYear;
    private String olIndex;
    private String olNameUsed;
    private Boolean olResultsAcceptance;

    private String alAdministrativeDistrictTaken;
    private String alAdministrativeDistrictConsidered;
    private Boolean alResultsAcceptance;

    private String username;
}
