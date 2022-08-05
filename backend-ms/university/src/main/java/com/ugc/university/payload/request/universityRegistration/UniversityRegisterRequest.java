package com.ugc.university.payload.request.universityRegistration;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class UniversityRegisterRequest {
    private Long uniId;
    private String name;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;

    private String username;
    private String email;
    private Set<String> role;
    private String password;

    public UniversityRegisterRequest(String name, String address, String islandRank, String worldRank, String phone, String username, String email, String password) {
        this.name = name;
        this.address = address;
        this.islandRank = islandRank;
        this.worldRank = worldRank;
        this.phone = phone;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
