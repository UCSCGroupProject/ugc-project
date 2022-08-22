package com.ugc.student.payload.response.universityAdmission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class Step2FormResponse {
    private String olCategory;
    private String olYear;
    private String olIndex;
    private String olNameUsed;
    private Boolean olResultsAcceptance;

    private String alAdministrativeDistrictTaken;
    private String alAdministrativeDistrictConsidered;
    private Boolean alResultsAcceptance;
}
