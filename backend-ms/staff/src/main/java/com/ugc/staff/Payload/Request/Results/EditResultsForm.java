package com.ugc.staff.Payload.Request.Results;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class EditResultsForm {
    private String studentId;
    List<ResultRow> results;
}
