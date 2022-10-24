package com.ugc.zscore.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ZScoreResponse {
    public Long id;
    public String first_name;
    public String last_name;
    public Integer age;


}
