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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long schoolId;
    private String name;
    private String address;
    private String district;
    private String phone;

    public SchoolDetails(Long schoolId, String name, String address, String district, String phone) {
        this.schoolId = schoolId;
        this.name = name;
        this.address = address;
        this.district = district;
        this.phone = phone;
    }
}
