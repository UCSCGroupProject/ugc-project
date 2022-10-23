package com.ugc.staff.Payload.Request.Results;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResultRow {
    String subjectId;
    String subjectName;
    String grade;
}
