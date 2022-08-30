package com.ugc.university.payload.response.course;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class UniCourseListResponse {
    private List<UniCourseResponse> uniCourseResponses;
}
