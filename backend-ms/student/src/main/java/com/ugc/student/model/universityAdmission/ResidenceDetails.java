package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Optional;

@Entity
@Table(name = "residence_details")
@Getter
@Setter
@NoArgsConstructor
public class ResidenceDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String permanentAddress;
    private String administrativeDistrict;
    private String fixedTelephone;
    private String residenceStartLivingDate;
    private String race;
    private String religion;
    private String citizenByDescent;
    private String contactAddress;
    private String postalCode;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public ResidenceDetails(String permanentAddress, String administrativeDistrict, String fixedTelephone, String residenceStartLivingDate, String race, String religion, String citizenByDescent, String contactAddress, String postalCode, Student  student) {
        this.permanentAddress = permanentAddress;
        this.administrativeDistrict = administrativeDistrict;
        this.fixedTelephone = fixedTelephone;
        this.residenceStartLivingDate = residenceStartLivingDate;
        this.race = race;
        this.religion = religion;
        this.citizenByDescent = citizenByDescent;
        this.contactAddress = contactAddress;
        this.postalCode = postalCode;
        this.student = student;
        this.student.setResidenceDetails(this);
    }
}
