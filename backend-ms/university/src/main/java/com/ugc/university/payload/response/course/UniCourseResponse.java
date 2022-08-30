package com.ugc.university.payload.response.course;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UniCourseResponse {
    private Integer id;
    private String courseName;
    private String universityName;
    private String unicode;
}
