package com.ugc.blockchain.Service;

import com.ugc.blockchain.BlockChain.Block;
import com.ugc.blockchain.BlockChain.BlockChain;
import com.ugc.blockchain.Constants.Constants;
import com.ugc.blockchain.Cryptocurrency.Transaction;
import com.ugc.blockchain.Miner.Miner;
import net.bytebuddy.implementation.bind.annotation.DefaultMethod;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlockChainService {
    BlockChain blockChain = new BlockChain();
    Miner miner = new Miner();
    List<Transaction> transactions = new ArrayList<>();

    public void test() {
//        BlockChain blockChain = new BlockChain();
//        Miner miner = new Miner();
//        List<Transaction> transactions = new ArrayList<>();

        Transaction transaction1 = new Transaction("1", "1032288", "ABC", "200120402367", "2010-06-20", "2012-01-20");
        Transaction transaction2 = new Transaction("2", "1032289", "DEF", "159753846231", "2010-01-12", "2014-04-03");
        Transaction transaction3 = new Transaction("3", "1032290", "GHI", "852016423569", "2010-03-17", "2016-05-21");
        transactions.clear();
        transactions.add(transaction1);
        transactions.add(transaction2);
        transactions.add(transaction3);
        Block block0 = new Block(0, transactions, Constants.GENESIS_PREV_HASH);
        miner.mine(block0, blockChain);
//
        Transaction transaction4 = new Transaction("1", "1032291", "LMO", "200120402569", "2010-06-10", "2014-02-12");
        Transaction transaction5 = new Transaction("2", "1032292", "PQR", "200120402159", "2010-08-24", "2014-01-18");
        Transaction transaction6 = new Transaction("3", "1032293", "STU", "200120407561", "2010-09-12", "2015-05-25");
        transactions.clear();
        transactions.add(transaction4);
        transactions.add(transaction5);
        transactions.add(transaction6);
        Block block1 = new Block(1, transactions, blockChain.getBlockChain().get(blockChain.size() - 1).getHash());
        miner.mine(block1, blockChain);

        System.out.println("\n" + "BLOCKCHAIN: \n" + blockChain);
        System.out.println("Miner's reward: " + miner.getReward());
    }

    public void addGenesisBlockToBlockChain(){
        List<Transaction> transactions = new ArrayList<>();

        Transaction transaction1 = new Transaction("1", "1032288", "ABC", "200120402367", "2010-06-20", "2012-01-20");
        transactions.add(transaction1);

        Block block0 = new Block(0, transactions, Constants.GENESIS_PREV_HASH);

        miner.mine(block0, blockChain);
    }

    public void addBlockToBlockChain(List<Transaction> transactionsList){
        List<Transaction> transactions = new ArrayList<>();

        for(Transaction t: transactionsList){
            Transaction transaction = new Transaction(t.getTransactionId(), t.getIndex(), t.getFullName(), t.getNic(), t.getDateOfAdmission(), t.getDateOfLeave());
            transactions.add(transaction);
        }

        Block block = new Block(2, transactions, blockChain.getBlockChain().get(blockChain.size() - 1).getHash());

        miner.mine(block, blockChain);
    }

    public BlockChain getBlockChain(){
        return blockChain;
    }
}
