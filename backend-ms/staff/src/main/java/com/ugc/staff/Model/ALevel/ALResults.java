package com.ugc.staff.Model.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ALResults {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String indexNumber;
    private String name;

    private String zscore;
    private String stream;
    private String district;
    private String school;
    private String districtRank;
    private String islandRank;
    private String passOrFail;
    private String studentStatus;

    @OneToMany(mappedBy = "alResults")
    private Set<ALStudentResult> alStudentResults = new HashSet<>();

    public ALResults(String district, String districtRank, String indexNumber, String islandRank, String name, String passOrFail, String school, String stream, String studentStatus, String zscore) {
        this.indexNumber = indexNumber;
        this.name = name;
        this.stream = stream;
        this.district = district;
        this.school = school;
        this.districtRank = districtRank;
        this.islandRank = islandRank;
        this.passOrFail = passOrFail;
        this.studentStatus = studentStatus;
        this.zscore = zscore;
    }
}
