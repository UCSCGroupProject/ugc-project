package com.ugc.school.payload.request.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReqStudentRecord {
    private Integer id;
    private String stuIndex;
    private String fullName;
    private String nic;
    private String admissionDate;
    private String leaveDate;
    private Boolean validity;
}
