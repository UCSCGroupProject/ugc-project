package com.ugc.zscore.payload.response;

import com.ugc.university.payload.response.ResType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PayloadResponse {
    private Object payload;
    private String message;
    private ResType type;
}
