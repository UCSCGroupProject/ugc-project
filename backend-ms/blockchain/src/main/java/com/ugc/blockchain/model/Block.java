package com.ugc.blockchain.model;

import com.ugc.blockchain.crypto.cryptocurrency.Transaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Block {
    @Id
    private int id;
    private List<Transaction> transactions;
    private String creatorName;
    private String creatorAddress;
    private String creatorPublicKey;
    private String creatorSignature;
    private String previousHash;
    private String hash;
    private int nonce;
    private long timeStamp;
}
