package com.ugc.university.payload.response.course;

import com.ugc.university.payload.response.objects.ALSubjectRecord;
import com.ugc.university.payload.response.objects.OLSubjectRecord;
import com.ugc.university.payload.response.objects.UnicodeRecord;
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
    private String courseCode;
    private String stream;
    private Integer intakeAmount;

    private List<ALSubjectRecord> requiredFirstSubjects;
    private List<ALSubjectRecord> requiredSecondSubjects;
    private List<ALSubjectRecord> requiredThirdSubjects;

    private List<OLSubjectRecord> requiredOLSubjects;

    private List<UnicodeRecord> offeredUniversities;
}
