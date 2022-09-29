package com.ugc.university.model.alsubject;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(
        name = "alsubject",
        uniqueConstraints = {
        @UniqueConstraint(columnNames = "name")
})
@Getter
@Setter
@NoArgsConstructor
public class Alsubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    // For the foreign key referenced from AlSubjectDependency
    @OneToMany(mappedBy = "alsubject")
    private List<ALSubjectDependency> alSubjectDependencies;

    public Alsubject(String name) {
        this.name = name;
    }
}
