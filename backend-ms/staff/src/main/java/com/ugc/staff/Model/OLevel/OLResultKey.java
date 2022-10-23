package com.ugc.staff.Model.OLevel;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class OLResultKey implements Serializable {
    @Column(name = "student_id")
    Integer studentId;

    @Column(name = "olSubject_id")
    Integer olSubjectId;
}
