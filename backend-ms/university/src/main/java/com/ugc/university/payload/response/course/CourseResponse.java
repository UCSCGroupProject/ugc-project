package com.ugc.university.payload.response.course;

import com.ugc.university.model.course.Stream;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class CourseResponse {
    private Integer id;
    private String name;
    private String stream;
    private String course;
    private Integer intake;
}
