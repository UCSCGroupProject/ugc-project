package com.ugc.university.model.course;

import com.ugc.university.model.University;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "unicode")
@Getter
@Setter
@NoArgsConstructor
public class Unicode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private Course course;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uni_id", referencedColumnName = "id")
    private University university;

    private String unicodeValue;

    public Unicode(Course course, University university, String unicodeValue) {
        this.course = course;
        this.university = university;
        this.unicodeValue = unicodeValue;
    }
}
