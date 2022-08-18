package com.ugc.selections.Payload.Request;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class ZScoreRequest {
    Map<String, String> zscores;
}
