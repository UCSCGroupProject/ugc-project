package com.ugc.school.payload.response.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ResValidationDocument {
    private Integer id;
    private Long schoolId;
    private String schoolName;
    private String schoolUsername;
    private String schoolAddress;
    private List<ResStudentRecord> studentRecords;
    private Boolean status;
}
