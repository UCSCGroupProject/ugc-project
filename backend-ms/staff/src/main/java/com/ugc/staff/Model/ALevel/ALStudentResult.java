package com.ugc.staff.Model.ALevel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Setter
@Getter
@Entity
@NoArgsConstructor
public class ALStudentResult {
    @EmbeddedId
    ALResultKey id = new ALResultKey();

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    ALResults alResults;

    @ManyToOne
    @MapsId("alSubjectId")
    @JoinColumn(name = "alSubject_id")
    ALSubject alSubject;

    String grade;

    public ALStudentResult(ALResults alResults, ALSubject alSubject, String grade) {
        this.alResults = alResults;
        this.alSubject = alSubject;
        this.grade = grade;
    }
}
