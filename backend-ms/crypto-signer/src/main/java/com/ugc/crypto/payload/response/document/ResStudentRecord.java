package com.ugc.crypto.payload.response.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResStudentRecord {
    private Integer id;
    private String stuIndex;
    private String fullName;
    private String nic;
    private String admissionDate;
    private String leaveDate;
    private Boolean validity;
}
