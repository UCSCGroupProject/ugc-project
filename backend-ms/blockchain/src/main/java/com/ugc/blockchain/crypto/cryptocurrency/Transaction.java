package com.ugc.blockchain.crypto.cryptocurrency;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.security.PrivateKey;

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

    public Transaction(String transactionId, String index, String fullName, String nic, String dateOfAdmission, String dateOfLeave){
        this.transactionId = transactionId;
        this.index = index;
        this.fullName = fullName;
        this.nic = nic;
        this.dateOfAdmission = dateOfAdmission;
        this.dateOfLeave = dateOfLeave;
    }

    @Override
    public String toString(){
        return transactionId + ":" + index + ":" + fullName + ":" + nic + ":" + dateOfAdmission + ":" + dateOfLeave;
    }
}
