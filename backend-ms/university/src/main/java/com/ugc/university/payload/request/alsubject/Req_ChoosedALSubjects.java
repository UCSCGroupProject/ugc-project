package com.ugc.university.payload.request.alsubject;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Req_ChoosedALSubjects {
    public String firstSubject;
    public String secondSubject;
    public String thirdSubject;
    public String courseCode;
}
