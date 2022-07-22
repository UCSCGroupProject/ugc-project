package com.ugc.student.payload.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "student_details")
@Getter
@Setter
@NoArgsConstructor
public class StudentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long stuId;
    private String title;
    private String nameWithInitials;
    private String fullName;
    private Date dob;
    private String pob;
    private String civilStatus;
    private String gender;
    private String phone;

    public StudentDetails(String title, String nameWithInitials, String fullName, Date dob, String pob, String civilStatus, String gender, String phone) {
        this.title = title;
        this.nameWithInitials = nameWithInitials;
        this.fullName = fullName;
        this.dob = dob;
        this.pob = pob;
        this.civilStatus = civilStatus;
        this.gender = gender;
        this.phone = phone;
    }
}
