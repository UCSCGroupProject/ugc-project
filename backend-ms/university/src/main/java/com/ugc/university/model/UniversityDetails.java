package com.ugc.university.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "university_details")
@Getter
@Setter
@NoArgsConstructor
public class UniversityDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uniId;
    private String name;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;

    public UniversityDetails(String name, String address, String islandRank, String worldRank, String phone) {
        this.name = name;
        this.address = address;
        this.islandRank = islandRank;
        this.worldRank = worldRank;
        this.phone = phone;
    }
}
