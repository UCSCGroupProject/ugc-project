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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long stuId;
    private String nic;
    private Date nicDateOfIssue;
    private String indexNo;
    private String usedIDType;
    private String usedIDNo;
    private Date usedIDDateOfIssue;
    private String usedIDCopy;

    public NICAndExamDetails(String nic, Date nicDateOfIssue, String indexNo, String usedIDType, String usedIDNo, Date usedIDDateOfIssue, String usedIDCopy) {
        this.nic = nic;
        this.nicDateOfIssue = nicDateOfIssue;
        this.indexNo = indexNo;
        this.usedIDType = usedIDType;
        this.usedIDNo = usedIDNo;
        this.usedIDDateOfIssue = usedIDDateOfIssue;
        this.usedIDCopy = usedIDCopy;
    }
}
