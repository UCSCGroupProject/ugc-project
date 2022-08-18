package com.ugc.selections.Payload.Request;

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
