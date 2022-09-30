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
@NoArgsConstructor
@AllArgsConstructor
public class OLSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique=true)
    private String name;

    @OneToMany(mappedBy = "olSubject")
    Set<OLStudentResult> olStudentResults = new HashSet<>();
    public OLSubject(String name) {
        this.name = name;
    }
}
