package com.ugc.university.payload.request.universityRegistration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UniversityDetailsRequest {
    private Long uniId;
    private String name;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;
}
