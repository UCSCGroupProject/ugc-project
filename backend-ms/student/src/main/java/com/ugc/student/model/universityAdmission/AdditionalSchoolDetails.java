package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "additional_school_details")
@Getter
@Setter
@NoArgsConstructor
public class AdditionalSchoolDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String additionalSchoolName;
    private String additionalSchoolDistrict;
    private String additionalSchoolFrom;
    private String additionalSchoolTo;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public AdditionalSchoolDetails(String additionalSchoolName, String additionalSchoolDistrict, String additionalSchoolFrom, String additionalSchoolTo, Student student) {
        this.additionalSchoolName = additionalSchoolName;
        this.additionalSchoolDistrict = additionalSchoolDistrict;
        this.additionalSchoolFrom = additionalSchoolFrom;
        this.additionalSchoolTo = additionalSchoolTo;
        this.student = student;
    }
}
