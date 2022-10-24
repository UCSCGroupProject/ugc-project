package com.ugc.student.payload.request.universityAdmission;

import com.ugc.student.payload.response.universityAdmission.UnicodeRecord;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Step4FormRequest {
    private List<UnicodeRecord> unicodeRecords;

    private String username;
}
