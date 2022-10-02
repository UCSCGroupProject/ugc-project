package com.ugc.university.payload.request.olsubject;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Req_OLSubjectsWithResults {
    public String englishResult;
    public String mathematicsResult;
    public String scienceResult;
    public String courseCode;
}
