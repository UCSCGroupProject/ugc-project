package com.ugc.staff.Payload.Response.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
public class ZScoreRequest {
    Map<String, Double> zscores;
}
