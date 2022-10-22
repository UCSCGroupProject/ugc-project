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

    private String alYear;
    private String alIndex;
    private String alNameUsed;
    private Integer alSubject1Id;
    private Integer alSubject2Id;
    private Integer alSubject3Id;
    private String alMedium;
}
