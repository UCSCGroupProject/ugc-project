package com.ugc.staff.Payload.Response.OLevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OLStudentResultResponse {
    public Integer subjectId;
    public String subjectName;
    public String grade;
}
