package com.ugc.student.payload.response.universityAdmission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class Step4FormResponse {
    private List<String> unicodes;
}
