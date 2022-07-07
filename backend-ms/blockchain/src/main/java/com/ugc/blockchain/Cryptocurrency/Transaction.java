package com.ugc.blockchain.Cryptocurrency;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Transaction {
    private String transactionId;
    private String content;

    public Transaction(String transactionId, String content){
        this.transactionId = transactionId;
        this.content = content;
    }

    @Override
    public String toString(){
        return transactionId + ": " + content;
    }
}
