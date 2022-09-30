package com.ugc.staff.Payload.Response.OLevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OLResultsResponse {
    public Integer Id;
    public String name;
    public String indexNumber;
    public String district;
    public String school;
    public String islandRank;
    public String studentStatus;
    public String passOrFail;
}
