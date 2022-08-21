package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
    private String administrativeDistrict;
    private String telephone;
    private String dateOfAdmission;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public SchoolDetails(String name, String address, String administrativeDistrict, String telephone, String dateOfAdmission, Student student) {
        this.name = name;
        this.address = address;
        this.administrativeDistrict = administrativeDistrict;
        this.telephone = telephone;
        this.dateOfAdmission = dateOfAdmission;
        this.student = student;
        this.student.setSchoolDetails(this);
    }
}
