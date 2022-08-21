package com.ugc.student.model;

import com.ugc.student.model.universityAdmission.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name = "student",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "email")
        }
)
@Getter
@Setter
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    @Column(name = "username")
    private String username;

    @NotBlank
    @Size(max = 100)
    @Column(name = "email")
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "student_role",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    // For the foreign key referenced from StudentDetails
    @OneToOne(mappedBy = "student")
    private StudentDetails studentDetails;

    // For the foreign key referenced from NICAndExamDetails
    @OneToOne(mappedBy = "student")
    private NICAndExamDetails nicAndExamDetails;

    // UNIVERSITY ADMISSION Related
    // STEP 1
    // For the foreign key referenced from ResidenceDetails
    @OneToOne(mappedBy = "student")
    private ResidenceDetails residenceDetails;

    // For the foreign key referenced from ParentDetails
    @OneToOne(mappedBy = "student")
    private ParentDetails parentDetails;

    // For the foreign key referenced from ResidenceDetails
    @OneToOne(mappedBy = "student")
    private ContactPersonDetails contactPersonDetails;

    // STEP 3
    // For the foreign key referenced from SchoolDetails
    @OneToOne(mappedBy = "student")
    private SchoolDetails schoolDetails;

    // For the foreign key referenced from AdditionalSchoolDetails
    @OneToMany(mappedBy = "student")
    private Set<AdditionalSchoolDetails> additionalSchoolDetails;

    // For the foreign key referenced from OtherDetails
    @OneToOne(mappedBy = "student")
    private OtherDetails otherDetails;

    // STEP 4
    // For the foreign key referenced from OrderOfPreference
    @OneToMany(mappedBy = "student")
    private Set<OrderOfPreference> orderOfPreferences;

    // Constructor
    public Student(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
