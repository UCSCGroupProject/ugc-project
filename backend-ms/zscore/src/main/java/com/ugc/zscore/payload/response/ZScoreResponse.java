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
    public String id;
    public String first_name;
    public String last_name;
    public String course;
    public String uni;
    public String age;

}
