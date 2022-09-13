package com.ugc.school.payload.request.studentValidation;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Transaction {
    private String transactionId;
    private String index;
    private String fullName;
    private String nic;
    private String dateOfAdmission;
    private String dateOfLeave;
    private Boolean validity;

    public Transaction(String transactionId, String index, String fullName, String nic, String dateOfAdmission, String dateOfLeave, Boolean validity){
        this.transactionId = transactionId;
        this.index = index;
        this.fullName = fullName;
        this.nic = nic;
        this.dateOfAdmission = dateOfAdmission;
        this.dateOfLeave = dateOfLeave;
        this.validity = validity;
    }

    @Override
    public String toString(){
        return transactionId + ":" + index + ":" + fullName + ":" + nic + ":" + dateOfAdmission + ":" + dateOfLeave + ":" + validity;
    }
}
