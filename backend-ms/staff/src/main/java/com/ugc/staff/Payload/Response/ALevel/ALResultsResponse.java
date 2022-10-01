package com.ugc.staff.Payload.Response.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ALResultsResponse {
    public Integer Id;
    public String name;
    public String indexNumber;
    public String zscore;
    public String stream;
    public String district;
    public String school;
    public String districtRank;
    public String islandRank;
    public String studentStatus;
    public String passOrFail;
}
