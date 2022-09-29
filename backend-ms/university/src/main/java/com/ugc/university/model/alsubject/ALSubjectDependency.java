package com.ugc.university.model.alsubject;

import com.ugc.university.model.course.Course;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "al_subject_dependency")
@Getter
@Setter
@NoArgsConstructor
public class ALSubjectDependency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "alsubject_id", referencedColumnName = "id")
    private Alsubject alsubject;

    private Integer statusIndex;

    private String minGrade;


    public ALSubjectDependency(Course course, Alsubject alsubject, Integer statusIndex, String minGrade) {
        this.course = course;
        this.alsubject = alsubject;
        this.statusIndex = statusIndex;
        this.minGrade = minGrade;
    }
}
