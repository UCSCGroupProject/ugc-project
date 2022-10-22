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

    private String alYear;
    private String alIndex;

    private String alNameUsed;
    private String alSubject1;
    private String alSubject2;
    private String alSubject3;
    private String alMedium;

//    private String ALAdministrativeDistrictTaken;
//    private String ALAdministrativeDistrictConsidered;
//    private Boolean ALResultsAcceptance;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

//    public ALDetails(String ALAdministrativeDistrictTaken, String ALAdministrativeDistrictConsidered, Boolean ALResultsAcceptance, Student student) {
//        this.ALAdministrativeDistrictTaken = ALAdministrativeDistrictTaken;
//        this.ALAdministrativeDistrictConsidered = ALAdministrativeDistrictConsidered;
//        this.ALResultsAcceptance = ALResultsAcceptance;
//        this.student = student;
//    }

    public ALDetails(String alYear, String alIndex, String alNameUsed, String alSubject1, String alSubject2, String alSubject3, String alMedium, Student student) {
        this.alYear = alYear;
        this.alIndex = alIndex;
        this.alNameUsed = alNameUsed;
        this.alSubject1 = alSubject1;
        this.alSubject2 = alSubject2;
        this.alSubject3 = alSubject3;
        this.alMedium = alMedium;
        this.student = student;
    }
}
