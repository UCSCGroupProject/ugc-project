package com.ugc.staff.Model.OLevel;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class OLResultKey implements Serializable {
    @Column(name = "student_id")
    Integer studentId;

    @Column(name = "olSubject_id")
    Integer olSubjectId;
}
