package com.ugc.student.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "student_details")
@Getter
@Setter
@NoArgsConstructor
public class StudentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String nameWithInitials;
    private String fullName;
    private Date dob;
    private String pob;
    private String civilStatus;
    private String gender;
    private String phone;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public StudentDetails(String title, String nameWithInitials, String fullName, Date dob, String pob, String civilStatus, String gender, String phone, Student student) {
//        this.stuId = stuId;
        this.title = title;
        this.nameWithInitials = nameWithInitials;
        this.fullName = fullName;
        this.dob = dob;
        this.pob = pob;
        this.civilStatus = civilStatus;
        this.gender = gender;
        this.phone = phone;
        this.student = student;
        this.student.setStudentDetails(this);
    }
}
