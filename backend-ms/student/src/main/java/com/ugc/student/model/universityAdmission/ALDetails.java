package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "al_details")
@Getter
@Setter
@NoArgsConstructor
public class ALDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ALAdministrativeDistrictTaken;
    private String ALAdministrativeDistrictConsidered;
    private Boolean ALResultsAcceptance;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public ALDetails(String ALAdministrativeDistrictTaken, String ALAdministrativeDistrictConsidered, Boolean ALResultsAcceptance, Student student) {
        this.ALAdministrativeDistrictTaken = ALAdministrativeDistrictTaken;
        this.ALAdministrativeDistrictConsidered = ALAdministrativeDistrictConsidered;
        this.ALResultsAcceptance = ALResultsAcceptance;
        this.student = student;
    }
}
