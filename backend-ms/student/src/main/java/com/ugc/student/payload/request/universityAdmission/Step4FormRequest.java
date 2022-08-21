package com.ugc.student.payload.request.universityAdmission;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Step4FormRequest {
    private List<String> unicodes;

    private String username;
}
