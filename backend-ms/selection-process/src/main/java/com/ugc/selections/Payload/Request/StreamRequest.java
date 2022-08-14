package com.ugc.selections.Payload.Request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.util.Pair;

import java.util.List;

@Getter
@Setter
public class StreamRequest {
    List<Pair<String, String>> eligibleIndexStream;
}
