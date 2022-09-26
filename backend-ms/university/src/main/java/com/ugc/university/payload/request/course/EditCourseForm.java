package com.ugc.university.payload.request.course;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EditCourseForm {
    private String id;
    private String name;
    private String stream;
    private String code;
    private String intake;
}
