package com.ugc.blockchain.crypto.blockchain;

import com.ugc.blockchain.crypto.cryptocurrency.Transaction;
import com.ugc.blockchain.crypto.hashing.SHA256Helper;
import com.ugc.blockchain.crypto.merkletree.MerkelTree;
import com.ugc.blockchain.crypto.signing.ECDSAHelper;
import lombok.Getter;
import lombok.Setter;

import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class Block {
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

    public Block(int id, List<Transaction> transactions, String creatorName, String creatorAddress, String creatorPublicKey, String previousHash){
        this.id = id;
        this.transactions = transactions;
        this.creatorName = creatorName;
        this.creatorAddress = creatorAddress;
        this.creatorPublicKey = creatorPublicKey;
        this.previousHash = previousHash;
        this.timeStamp = new Date().getTime();
        generateHash();
    }

    public List<String> transformTransactionsForMerkelTree(){
        List<String> transactionList = new ArrayList<>();

        for (Transaction transaction: transactions) {
            transactionList.add(transaction.toString());
        }

        return transactionList;
    }

    public void generateHash(){
        // Generate merkle root fot the transactions
        List<String> merkelList = transformTransactionsForMerkelTree();
        MerkelTree merkelTree = new MerkelTree(merkelList);
        String merkelRoot = merkelTree.getMerkelRoot().get(0);

        String dataToHash = Integer.toString(id) + merkelRoot + creatorName + creatorAddress + creatorPublicKey + creatorSignature + Integer.toString(nonce) + Long.toString(timeStamp);

        String hashValue = SHA256Helper.generateHash(dataToHash);

        this.hash = hashValue;
    }

    public void generateSignature(PrivateKey privateKey){
        String data = this.hash;
        String signature = ECDSAHelper.applyECDSASignature(privateKey, data);

        this.creatorSignature = signature;
    }

    public boolean verifySignature(String publicKey, String signature){
        String data = this.hash;

        return ECDSAHelper.verifyECDSASignature(publicKey, data, signature);
    }

    public boolean verifyBlock(){
        return verifySignature(this.creatorPublicKey, this.creatorSignature);
    }


    public void incrementNonce(){
        this.nonce++;
    }

    @Override
    public String toString(){
        return
                "--------------------------------- BLOCK -------------------------------------\n"+
                "Id: " + this.id + "\n" +
                "Transactions:  \n" + printTransactions(transactions) +
                "Creator details:" + "\n" +
                "\tName:\t\t" + this.creatorName + "\n" +
                "\tAddress:\t" + this.creatorAddress + "\n" +
                "\tPublic key:\t" + this.creatorPublicKey + "\n" +
                "\tSignature:\t" + this.creatorSignature + "\n" +
                "Hash:\t\t" + this.hash + "\n" +
                "Prev Hash:\t" + this.previousHash + "\n" +
                "-----------------------------------------------------------------------------\n";
    }

    public String printTransactions(List<Transaction> transactions){
        String transactionList = "";

        for (Transaction transaction: transactions)
            transactionList = transactionList + "\t" + transaction + '\n';

        return  transactionList;
    }
}
