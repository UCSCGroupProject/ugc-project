package com.ugc.school.payload.request.defaultSchool;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Req_DefaultSchool {
    public String schoolName;
    public String districtName;
}
