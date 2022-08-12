package com.ugc.school.payload.request.studentValidation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReqBlockData {
    private List<Transaction> transactions;
    private String creatorName;
    private String creatorAddress;
    private String creatorPublicKey;
    private String creatorPrivateKey;

    public ReqBlockData(List<Transaction> transactions, String creatorName) {
        this.transactions = transactions;
        this.creatorName = creatorName;
    }
}
