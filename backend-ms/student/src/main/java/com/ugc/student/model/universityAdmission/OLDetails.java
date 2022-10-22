package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ol_details")
@Getter
@Setter
@NoArgsConstructor
public class OLDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String OLYear;
    private String OLIndex;
    private String OLNameUsed;

    private String englishResult;
    private String mathematicsResult;
    private String scienceResult;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public OLDetails(String OLYear, String OLIndex, String OLNameUsed, String englishResult, String mathematicsResult, String scienceResult, Student student) {
        this.OLYear = OLYear;
        this.OLIndex = OLIndex;
        this.OLNameUsed = OLNameUsed;
        this.englishResult = englishResult;
        this.mathematicsResult = mathematicsResult;
        this.scienceResult = scienceResult;
        this.student = student;
    }
}
