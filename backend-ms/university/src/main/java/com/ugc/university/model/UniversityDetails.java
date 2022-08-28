package com.ugc.university.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "university_details")
@Getter
@Setter
@NoArgsConstructor
public class UniversityDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uni_id", referencedColumnName = "id")
    private University university;

    public UniversityDetails(String name, String address, String islandRank, String worldRank, String phone, University university) {
        this.name = name;
        this.address = address;
        this.islandRank = islandRank;
        this.worldRank = worldRank;
        this.phone = phone;
        this.university = university;
        this.university.setUniversityDetails(this);
    }
}
