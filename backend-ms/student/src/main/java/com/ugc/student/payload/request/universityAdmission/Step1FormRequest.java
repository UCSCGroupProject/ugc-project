package com.ugc.student.payload.request.universityAdmission;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class Step1FormRequest {
    private String permanentAddress;
    private String administrativeDistrict;
    private String fixedTelephone;
    private String residenceStartLivingDate;
    private String race;
    private String religion;
    private String citizenByDescent;
    private String contactAddress;
    private String postalCode;

    private String fatherFullname;
    private String motherFullname;
    private String guardianFullname;

    private String contactPersonType;
    private String contactPersonAddress;
    private String contactPersonFixedTelephone;
    private String contactPersonMobile;

    private String username;
}
