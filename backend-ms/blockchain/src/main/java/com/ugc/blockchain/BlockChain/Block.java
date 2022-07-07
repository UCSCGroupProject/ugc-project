package com.ugc.blockchain.BlockChain;

import com.ugc.blockchain.Cryptocurrency.Transaction;
import com.ugc.blockchain.Hashing.SHA256Helper;
import com.ugc.blockchain.MerkleTree.MerkelTree;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class Block {
    private int id;
    private List<Transaction> transactions;
    private String previousHash;
    private String hash;
    private int nonce;
    private long timeStamp;

    public Block(int id, List<Transaction> transactions, String previousHash){
        this.id = id;
        this.transactions = transactions;
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

        String dataToHash = Integer.toString(id) + merkelRoot + Integer.toString(nonce) + Long.toString(timeStamp);

        String hashValue = SHA256Helper.generateHash(dataToHash);

        this.hash = hashValue;
    }

    public void incrementNonce(){
        this.nonce++;
    }

    // Add transaction to the block and check validity
//    public boolean addTransaction(Transaction transaction){
//        if(transaction == null) {
//            return false;
//        }
//
//        transactions.add(transaction);
//        return true;
//    }

    @Override
    public String toString(){
        return
                "--------------------------------- BLOCK -------------------------------------\n"+
                "Id: " + this.id + "\n" +
                "Transactions:  \n" + printTransactions(transactions) +
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
