package com.ugc.university.payload.response.course;

import com.ugc.university.payload.response.objects.ALSubjectRecord;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Res_CourseOverview {
    private String courseName;
    private String unicodeValue;

    private String universityName;
    private String universityUsername;

    private List<ALSubjectRecord> requiredFirstSubjects;
    private List<ALSubjectRecord> requiredSecondSubjects;
    private List<ALSubjectRecord> requiredThirdSubjects;

}
