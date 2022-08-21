package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "contact_person_details")
@Getter
@Setter
@NoArgsConstructor
public class ContactPersonDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contactPersonType;
    private String contactPersonAddress;
    private String contactPersonFixedTelephone;
    private String contactPersonMobile;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public ContactPersonDetails(String contactPersonType, String contactPersonAddress, String contactPersonFixedTelephone, String contactPersonMobile, Student student) {
        this.contactPersonType = contactPersonType;
        this.contactPersonAddress = contactPersonAddress;
        this.contactPersonFixedTelephone = contactPersonFixedTelephone;
        this.contactPersonMobile = contactPersonMobile;
        this.student = student;
        this.student.setContactPersonDetails(this);
    }
}
