package com.ugc.zscore.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ZScoreTableResponse {
    public Integer id;
    public String district;
    public String course;
    public String uni;
    public String uni_code;
    public String zvalue;
}
