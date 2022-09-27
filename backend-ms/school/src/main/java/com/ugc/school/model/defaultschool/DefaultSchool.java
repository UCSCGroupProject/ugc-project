package com.ugc.school.model.defaultschool;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "default_school")
@Getter
@Setter
@NoArgsConstructor
public class DefaultSchool {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    // Foreign key from district - Refer id column of the District table as dist_id
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "dist_id", referencedColumnName = "id")
    private District district;

    public DefaultSchool(String name, District district) {
        this.name = name;
        this.district = district;
    }
}
