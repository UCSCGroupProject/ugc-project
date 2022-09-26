package com.ugc.crypto.payload.response.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResValidationDocument {
    private Integer id;
    private Integer schoolId;
    private String schoolName;
    private String schoolAddress;
    private List<ResStudentRecord> studentRecords;
}
