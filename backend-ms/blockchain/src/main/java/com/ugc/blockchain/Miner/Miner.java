package com.ugc.blockchain.Miner;

import com.ugc.blockchain.BlockChain.Block;
import com.ugc.blockchain.BlockChain.BlockChain;
import com.ugc.blockchain.Constants.Constants;

public class Miner {
    private double reward;
    public static final int difficulty = Constants.DIFFICULTY;

    public void mine(Block block, BlockChain blockChain){
        while (notGoldenHash(block)){
            block.generateHash();
            block.incrementNonce();

//            System.out.println("Mining --> " + block.getHash());
        }

        System.out.println(block + " has just mined...");
        System.out.println("Hash:  " + block.getHash());

        blockChain.addBlock(block);
        reward += Constants.MINER_REWARD;
    }

    public boolean notGoldenHash(Block block){
        String leadingZeros = new String(new char[difficulty]).replace('\0', '0');
        return !block.getHash().substring(0, difficulty).equals(leadingZeros);
    }

    public double getReward(){
        return this.reward;
    }
}
