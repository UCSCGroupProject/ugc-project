package com.ugc.student.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "nic_and_exam_details")
@Getter
@Setter
@NoArgsConstructor
public class NICAndExamDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nic;
    private Date nicDateOfIssue;
    private String indexNo;
    private String usedIDType;
    private String usedIDNo;
    private Date usedIDDateOfIssue;
    private String usedIDCopy;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public NICAndExamDetails(String nic, Date nicDateOfIssue, String indexNo, String usedIDType, String usedIDNo, Date usedIDDateOfIssue, String usedIDCopy, Student student) {
        this.nic = nic;
        this.nicDateOfIssue = nicDateOfIssue;
        this.indexNo = indexNo;
        this.usedIDType = usedIDType;
        this.usedIDNo = usedIDNo;
        this.usedIDDateOfIssue = usedIDDateOfIssue;
        this.usedIDCopy = usedIDCopy;
        this.student = student;
        this.student.setNicAndExamDetails(this);
    }
}
