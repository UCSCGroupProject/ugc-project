package com.ugc.selections.Payload.Request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class DistrictRequest {
    Map<String, List<String>> districtsOfStudents;
}
