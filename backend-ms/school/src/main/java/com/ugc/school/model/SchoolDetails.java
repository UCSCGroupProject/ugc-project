package com.ugc.school.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "school_details")
@Getter
@Setter
@NoArgsConstructor
public class SchoolDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String district;
    private String phone;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "sch_id", referencedColumnName = "id")
    private School school;

    public SchoolDetails(String name, String address, String district, String phone, School school) {
        this.name = name;
        this.address = address;
        this.district = district;
        this.phone = phone;
        this.school = school;
        this.school.setSchoolDetails(this);
    }
}
