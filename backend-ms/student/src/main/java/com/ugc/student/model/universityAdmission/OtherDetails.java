package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "other_details")
@Getter
@Setter
@NoArgsConstructor
public class OtherDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String CandidateType;

    private Boolean AlreadyRegisteredAsInternalStudent;
    private Boolean AlreadyReceivedForeignScholarships;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public OtherDetails(String CandidateType, Boolean AlreadyRegisteredAsInternalStudent, Boolean AlreadyReceivedForeignScholarships, Student student) {
        this.CandidateType = CandidateType;
        this.AlreadyRegisteredAsInternalStudent = AlreadyRegisteredAsInternalStudent;
        this.AlreadyReceivedForeignScholarships = AlreadyReceivedForeignScholarships;
        this.student = student;
        this.student.setOtherDetails(this);
    }
}
