package com.ugc.crypto.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StudentRecord {
    private String id;
    private String index;
    private String fullName;
    private String nic;
    private String dateOfAdmission;
    private String dateOfLeave;

    public StudentRecord(String id, String index, String fullName, String nic, String dateOfAdmission, String dateOfLeave){
        this.id = id;
        this.index = index;
        this.fullName = fullName;
        this.nic = nic;
        this.dateOfAdmission = dateOfAdmission;
        this.dateOfLeave = dateOfLeave;
    }

    @Override
    public String toString(){
        return id + ":" + index + ":" + fullName + ":" + nic + ":" + dateOfAdmission + ":" + dateOfLeave;
    }
}
