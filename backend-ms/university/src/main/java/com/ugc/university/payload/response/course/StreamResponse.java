package com.ugc.university.payload.response.course;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class StreamResponse {
    private Integer id;
    private String streamName;
}
