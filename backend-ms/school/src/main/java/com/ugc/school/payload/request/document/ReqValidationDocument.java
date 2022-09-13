package com.ugc.school.payload.request.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ReqValidationDocument {
    private Integer id;
    private Integer schoolId;
    private String schoolName;
    private String schoolAddress;
    private List<ReqStudentRecord> studentRecords;
}
