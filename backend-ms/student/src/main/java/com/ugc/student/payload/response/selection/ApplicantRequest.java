package com.ugc.student.payload.response.selection;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ApplicantRequest {
    List<String> indexNumbers;
}
