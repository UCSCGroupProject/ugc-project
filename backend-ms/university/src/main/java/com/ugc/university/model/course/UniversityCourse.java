package com.ugc.university.model.course;

import com.ugc.university.model.UniversityDetails;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "university_course")
@Getter
@Setter
@NoArgsConstructor
public class UniversityCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer courseId;
    private Integer streamId;
    private String unicode;

    public UniversityCourse(String unicode) {
        this.unicode = unicode;
    }
}
