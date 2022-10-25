package com.ugc.staff.Payload.Response.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ALSubjectResponse {
    public String studentIndex;
    public String firstSubject;
    public String secondSubject;
    public String thirdSubject;
}
