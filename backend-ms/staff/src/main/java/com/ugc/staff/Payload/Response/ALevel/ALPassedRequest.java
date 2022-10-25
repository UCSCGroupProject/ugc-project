package com.ugc.staff.Payload.Response.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ALPassedRequest {
    List<String> indexNumbers;
}
