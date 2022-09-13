package com.ugc.school.model.document;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "document")
@Getter
@Setter
@NoArgsConstructor
public class ValidationDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer schoolId;
    private String schoolName;
    private String schoolAddress;

    // For the foreign key referenced from StudentRecord
    @OneToMany(mappedBy = "document")
    private List<StudentRecord> studentRecords;

    public ValidationDocument(Integer schoolId, String schoolName, String schoolAddress) {
        this.schoolId = schoolId;
        this.schoolName = schoolName;
        this.schoolAddress = schoolAddress;
    }
}
