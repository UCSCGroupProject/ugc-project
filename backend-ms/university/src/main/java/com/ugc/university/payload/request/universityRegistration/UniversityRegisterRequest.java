package com.ugc.university.payload.request.universityRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class UniversityRegisterRequest {
    private String name;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;

    private String username;
    private String email;
    private Set<String> role;
    private String password;
}
