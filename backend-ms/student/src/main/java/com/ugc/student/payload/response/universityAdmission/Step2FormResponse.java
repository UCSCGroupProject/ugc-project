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
    private String olYear;
    private String olIndex;
    private String olNameUsed;
    private String englishResult;
    private String mathematicsResult;
    private String scienceResult;

    private String alYear;
    private String alIndex;
    private String alNameUsed;
    private String alSubject1;
    private String alSubject2;
    private String alSubject3;
    private String alMedium;
}
