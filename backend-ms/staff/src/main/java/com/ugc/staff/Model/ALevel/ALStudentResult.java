package com.ugc.staff.Model.ALevel;

import javax.persistence.*;

@Entity
public class ALStudentResult {
    @EmbeddedId
    ALResultKey id;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    ALResults alResults;

    @ManyToOne
    @MapsId("alSubjectId")
    @JoinColumn(name = "alSubject_id")
    ALSubject alSubject;

    String passOrFail;
}
