package com.ugc.university.model.olsubject;

import com.ugc.university.model.alsubject.ALSubjectDependency;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(
        name = "olsubject",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "name")
        })
@Getter
@Setter
@NoArgsConstructor
public class Olsubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    // For the foreign key referenced from AlSubjectDependency
    @OneToMany(mappedBy = "olsubject")
    private List<OLSubjectDependency> olSubjectDependencies;

    public Olsubject(String name) {
        this.name = name;
    }
}
