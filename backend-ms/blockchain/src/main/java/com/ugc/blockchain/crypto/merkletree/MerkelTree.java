package com.ugc.blockchain.crypto.merkletree;

import com.ugc.blockchain.crypto.hashing.SHA256Helper;

import java.util.ArrayList;
import java.util.List;

public class MerkelTree {
    // Store transaction in a list
    private List<String> transactions;

    public MerkelTree(List<String> transactions){
        this.transactions = transactions;
    }

    // The root in the list is the Merkel root
    public List<String> getMerkelRoot(){
        return construct(this.transactions);
    }

    // Recursive function that keep mergin the neighboring hashes
    private List<String> construct(List<String> transactions){
        // Base case : Recursive method call
        if(transactions.size() == 1)
            return transactions;

        // IT contains fewer and fewer items in every iteration
        List<String> updatedList = new ArrayList<>();

        // Merging the neighboring items
        for (int i = 0; i < transactions.size() - 1; i+=2)
            updatedList.add(mergeHash(transactions.get(i), transactions.get(i+1)));

        // If the number of transaction is odd: The last item is hashed with iteself
        if (transactions.size()%2 == 1)
            updatedList.add(mergeHash(transactions.get(transactions.size() - 1), transactions.get(transactions.size() - 1)));

        // Recursive method call
        return construct(updatedList);
    }

    // Merging two hashes and generate a new hash using SHA256
    private String mergeHash(String hash1, String hash2){
        String mergedHash = hash1 + hash2;
        return SHA256Helper.generateHash(mergedHash);
    }
}
