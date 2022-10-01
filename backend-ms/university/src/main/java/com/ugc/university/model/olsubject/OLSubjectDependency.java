package com.ugc.university.model.olsubject;

import com.ugc.university.model.alsubject.Alsubject;
import com.ugc.university.model.course.Course;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ol_subject_dependency")
@Getter
@Setter
@NoArgsConstructor
public class OLSubjectDependency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "olsubject_id", referencedColumnName = "id")
    private Olsubject olsubject;

    private String minGrade;

    public OLSubjectDependency(Course course, Olsubject olsubject, String minGrade) {
        this.course = course;
        this.olsubject = olsubject;
        this.minGrade = minGrade;
    }
}
