package com.ugc.blockchain.payload.request;

import com.ugc.blockchain.crypto.cryptocurrency.Transaction;
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
