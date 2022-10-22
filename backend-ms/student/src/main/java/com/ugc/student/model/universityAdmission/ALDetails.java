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

    private String alIndex;
    private String alYear;

    private String alNameUsed;
    private Integer alSubject1Id;
    private Integer alSubject2Id;
    private Integer alSubject3Id;
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

    public ALDetails(String alIndex, String alYear, String alNameUsed, Integer alSubject1Id, Integer alSubject2Id, Integer alSubject3Id, String alMedium, Student student) {
        this.alIndex = alIndex;
        this.alYear = alYear;
        this.alNameUsed = alNameUsed;
        this.alSubject1Id = alSubject1Id;
        this.alSubject2Id = alSubject2Id;
        this.alSubject3Id = alSubject3Id;
        this.alMedium = alMedium;
        this.student = student;
    }
}
