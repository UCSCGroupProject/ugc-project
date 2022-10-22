package com.ugc.university.payload.request.ol_al;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Req_OLALSubjects {
    public String englishResult;
    public String mathematicsResult;
    public String scienceResult;

    public String firstSubject;
    public String secondSubject;
    public String thirdSubject;
}
