package com.ugc.school.payload.request.studentValidation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqBlockData {
    private List<Transaction> transactions;
    private String creatorName;
    private String creatorAddress;
    private String creatorPublicKey;
    private String creatorSignature;
}
