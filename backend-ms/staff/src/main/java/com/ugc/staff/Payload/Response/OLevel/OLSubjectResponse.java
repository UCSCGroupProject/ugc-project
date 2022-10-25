package com.ugc.staff.Payload.Response.OLevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OLSubjectResponse {
    public String studentIndex;
    public String englishResult;
    public String mathematicsResult;
    public String scienceResult;
}
