package com.ugc.university.payload.request.universityRegistration;

import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UniversityRegisterRequest {
    private String name;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;

    private String username;
    private String email;
    private String role;
    private String password;
}
