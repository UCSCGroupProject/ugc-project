package com.ugc.student.payload.response.universityAdmission;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class Step1FormResponse {
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

    public Step1FormResponse(String permanentAddress, String administrativeDistrict, String fixedTelephone, String residenceStartLivingDate, String race, String religion, String citizenByDescent, String contactAddress, String postalCode, String fatherFullname, String motherFullname, String guardianFullname, String contactPersonType, String contactPersonAddress, String contactPersonFixedTelephone, String contactPersonMobile) {
        this.permanentAddress = permanentAddress;
        this.administrativeDistrict = administrativeDistrict;
        this.fixedTelephone = fixedTelephone;
        this.residenceStartLivingDate = residenceStartLivingDate;
        this.race = race;
        this.religion = religion;
        this.citizenByDescent = citizenByDescent;
        this.contactAddress = contactAddress;
        this.postalCode = postalCode;
        this.fatherFullname = fatherFullname;
        this.motherFullname = motherFullname;
        this.guardianFullname = guardianFullname;
        this.contactPersonType = contactPersonType;
        this.contactPersonAddress = contactPersonAddress;
        this.contactPersonFixedTelephone = contactPersonFixedTelephone;
        this.contactPersonMobile = contactPersonMobile;
    }
}
