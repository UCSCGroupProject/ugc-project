package com.ugc.student.model.universityAdmission;

import com.ugc.student.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "order_of_preferences")
@Getter
@Setter
@NoArgsConstructor
public class OrderOfPreference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String unicode;
    private String courseName;
    private String universityName;

    // private Long stuId;
    // Foreign key from Student - Refer id column of the Student table as stu_id
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stu_id", referencedColumnName = "id")
    private Student student;

    public OrderOfPreference(String unicode, String courseName, String universityName, Student student) {
        this.unicode = unicode;
        this.courseName = courseName;
        this.universityName = universityName;
        this.student = student;
    }
}
