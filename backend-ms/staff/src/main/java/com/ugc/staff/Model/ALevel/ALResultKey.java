package com.ugc.staff.Model.ALevel;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class ALResultKey implements Serializable {
    @Column(name = "student_id")
    Integer studentId;

    @Column(name = "alSubject_id")
    Integer alSubjectId;

}
