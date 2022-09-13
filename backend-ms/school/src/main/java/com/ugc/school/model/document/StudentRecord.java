package com.ugc.school.model.document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "student_record")
@Getter
@Setter
@NoArgsConstructor
public class StudentRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String stuIndex;
    private String fullName;
    private String nic;
    private String admissionDate;
    private String leaveDate;
    private Boolean validity;

    // Foreign key from Document - Refer id column of the Document table as document_id
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "document_id", referencedColumnName = "id")
    private ValidationDocument document;

    public StudentRecord(String stuIndex, String fullName, String nic, String admissionDate, String leaveDate,Boolean validity, ValidationDocument document) {
        this.stuIndex = stuIndex;
        this.fullName = fullName;
        this.nic = nic;
        this.admissionDate = admissionDate;
        this.leaveDate = leaveDate;
        this.validity = validity;
        this.document = document;
    }
}
