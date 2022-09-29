package com.ugc.university.payload.request.alsubject;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Req_ALSubjectsWithResults {
    public String firstSubject;
    public String firstSubjectResult;
    public String secondSubject;
    public String secondSubjectResult;
    public String thirdSubject;
    public String thirdSubjectResult;
    public String courseCode;
}
