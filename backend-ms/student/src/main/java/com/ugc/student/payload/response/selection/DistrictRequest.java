package com.ugc.student.payload.response.selection;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
public class DistrictRequest {
    Map<String, List<String>> districtsOfStudents;
}
