package com.ugc.university.payload.response.course;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
public class CourseIntakeRequest {
    Map<String, Integer> courseIntake;
}
