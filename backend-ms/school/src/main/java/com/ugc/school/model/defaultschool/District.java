package com.ugc.school.model.defaultschool;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "district")
@Getter
@Setter
@NoArgsConstructor
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    // For the foreign key referenced from StudentDetails
    @OneToMany(mappedBy = "district")
    private List<DefaultSchool> defaultSchool;

    public District(String name) {
        this.name = name;
    }
}
