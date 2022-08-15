package com.ugc.selections.Payload.Request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.util.Pair;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class ApplicantRequest {
    Map<String, String> indexNumbersWithStreams;
}
