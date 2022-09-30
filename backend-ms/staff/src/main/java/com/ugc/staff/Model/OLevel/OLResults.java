package com.ugc.staff.Model.OLevel;

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
public class OLResults {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String indexNumber;
    private String name;
    private String district;
    private String school;
    private String islandRank;
    private String passOrFail;
    private String studentStatus;

    @OneToMany(mappedBy = "olResults")
    private Set<OLStudentResult> alStudentResults = new HashSet<>();

    public OLResults(String indexNumber, String name, String district, String school, String islandRank, String passOrFail, String studentStatus) {
        this.indexNumber = indexNumber;
        this.name = name;
        this.district = district;
        this.school = school;
        this.islandRank = islandRank;
        this.passOrFail = passOrFail;
        this.studentStatus = studentStatus;
    }
}
