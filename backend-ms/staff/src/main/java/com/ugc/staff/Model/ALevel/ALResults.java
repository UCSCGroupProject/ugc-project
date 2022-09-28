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
    private String stream;
    private String district;
    private String school;
    private String districtRank;
    private String islandRank;
    private String passOrFail;
    private String studentStatus;

    @OneToMany(mappedBy = "alResults")
    private Set<ALStudentResult> alStudentResults = new HashSet<>();
}
