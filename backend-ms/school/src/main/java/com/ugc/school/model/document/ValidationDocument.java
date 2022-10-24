package com.ugc.school.model.document;

import com.ugc.school.model.School;
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

//    private Long schoolId;
    @OneToOne
    private School school;

//    private String schoolName;
//    private String schoolAddress;

    // For the foreign key referenced from StudentRecord
    @OneToMany(mappedBy = "document")
    private List<StudentRecord> studentRecords;

    private Boolean status;

//    public ValidationDocument(Long schoolId, String schoolName, String schoolAddress, Boolean status) {
//        this.schoolId = schoolId;
//        this.schoolName = schoolName;
//        this.schoolAddress = schoolAddress;
//        this.status = status;
//    }


    public ValidationDocument(School school, Boolean status) {
        this.school = school;
        this.status = status;
    }
}
