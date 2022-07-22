package com.ugc.staff.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "staff_details")
@Getter
@Setter
@NoArgsConstructor
public class PersonalDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long staffId;

    private String title;

    private String nameWithInitials;

    private String fullName;

    private Date dob;

    private String address;

    private String phoneNumber;

    private String homeNumber;

    private String gender;

    public PersonalDetails(String title, String nameWithInitials, String fullName, Date dob, String address, String phoneNumber, String homeNumber, String gender) {
        this.title = title;
        this.nameWithInitials = nameWithInitials;
        this.fullName = fullName;
        this.dob = dob;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.homeNumber = homeNumber;
        this.gender = gender;
    }
}
