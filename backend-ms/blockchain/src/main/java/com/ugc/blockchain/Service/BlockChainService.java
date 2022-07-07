package com.ugc.blockchain.Service;

import com.ugc.blockchain.BlockChain.Block;
import com.ugc.blockchain.BlockChain.BlockChain;
import com.ugc.blockchain.Constants.Constants;
import com.ugc.blockchain.Cryptocurrency.Transaction;
import com.ugc.blockchain.Miner.Miner;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlockChainService {
    public void test() {
        BlockChain blockChain = new BlockChain();
        Miner miner = new Miner();
        List<Transaction> transactions = new ArrayList<>();

        Transaction transaction1 = new Transaction("1", "Student1 - 990001");
        Transaction transaction2 = new Transaction("2", "Student2 - 990002");
        Transaction transaction3 = new Transaction("3", "Student3 - 990003");
        transactions.clear();
        transactions.add(transaction1);
        transactions.add(transaction2);
        transactions.add(transaction3);
        Block block0 = new Block(0, transactions, Constants.GENESIS_PREV_HASH);
        miner.mine(block0, blockChain);

        Transaction transaction4 = new Transaction("1", "Student4 - 990004");
        Transaction transaction5 = new Transaction("2", "Student5 - 990005");
        Transaction transaction6 = new Transaction("3", "Student6 - 990006");
        transactions.clear();
        transactions.add(transaction4);
        transactions.add(transaction5);
        transactions.add(transaction6);
        Block block1 = new Block(1, transactions, blockChain.getBlockChain().get(blockChain.size() - 1).getHash());
        miner.mine(block1, blockChain);

        System.out.println("\n" + "BLOCKCHAIN: \n" + blockChain);
        System.out.println("Miner's reward: " + miner.getReward());
    }
}
