package com.ugc.staff.Model.OLevel;

import com.ugc.staff.Model.OLevel.OLResults;
import com.ugc.staff.Model.OLevel.OLSubject;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Setter
@Getter
@Entity
@NoArgsConstructor
public class OLStudentResult {
    @EmbeddedId
    OLResultKey id = new OLResultKey();

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    OLResults olResults;

    @ManyToOne
    @MapsId("olSubjectId")
    @JoinColumn(name = "olSubject_id")
    OLSubject olSubject;

    String grade;

    public OLStudentResult(OLResults olResults, OLSubject olSubject, String grade) {
        this.olResults = olResults;
        this.olSubject = olSubject;
        this.grade = grade;
    }
}
