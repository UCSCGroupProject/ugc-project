package com.ugc.staff.Model.ALevel;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ALResultKey implements Serializable {
    @Column(name = "student_id")
    Integer studentId;

    @Column(name = "alSubject_id")
    Integer alSubjectId;
}
