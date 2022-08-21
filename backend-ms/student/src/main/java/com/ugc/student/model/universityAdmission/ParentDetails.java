package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "parent_details")
@Getter
@Setter
@NoArgsConstructor
public class ParentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fatherFullname;
    private String motherFullname;
    private String guardianFullname;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public ParentDetails(String fatherFullname, String motherFullname, String guardianFullname, Student student) {
        this.fatherFullname = fatherFullname;
        this.motherFullname = motherFullname;
        this.guardianFullname = guardianFullname;
        this.student = student;
        this.student.setParentDetails(this);
    }
}
