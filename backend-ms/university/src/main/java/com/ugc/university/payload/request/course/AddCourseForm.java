package com.ugc.university.payload.request.course;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AddCourseForm {
    @NotBlank
    private String name;

    @NotBlank
    private String stream;

    @NotBlank
    private String code;

    @NotBlank
    private String intake;

}
