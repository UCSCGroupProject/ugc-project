package com.ugc.staff.Payload.Response.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ALStudentResultResponse {
    public Integer subjectId;
    public String subjectName;
    public String grade;
}
