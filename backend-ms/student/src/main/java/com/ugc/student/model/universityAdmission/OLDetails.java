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

    private String OLCategory;
    private String OLYear;
    private String OLIndex;
    private String OLNameUsed;
    private Boolean OLResultsAcceptance;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public OLDetails(String OLCategory, String OLYear, String OLIndex, String OLNameUsed, Boolean OLResultsAcceptance, Student student) {
        this.OLCategory = OLCategory;
        this.OLYear = OLYear;
        this.OLIndex = OLIndex;
        this.OLNameUsed = OLNameUsed;
        this.OLResultsAcceptance = OLResultsAcceptance;
        this.student = student;
    }
}
