package com.ugc.blockchain.crypto.miner;

import com.ugc.blockchain.crypto.blockchain.Block;
import com.ugc.blockchain.crypto.blockchain.BlockChain;
import com.ugc.blockchain.crypto.constants.Constants;
import com.ugc.blockchain.service.BlockChainService;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.PrivateKey;

public class Miner {
    private double reward;
    public static final int difficulty = Constants.DIFFICULTY;

    public Block mine(Block block, BlockChain blockChain, PrivateKey privateKey){
        while (notGoldenHash(block)){
            block.generateHash();
            block.incrementNonce();
        }

        block.generateSignature(privateKey);

        System.out.println(block + " has just mined...");
        System.out.println("Hash:  " + block.getHash());


        blockChain.addBlock(block);
        reward += Constants.MINER_REWARD;

        return block;
    }

    public boolean notGoldenHash(Block block){
        String leadingZeros = new String(new char[difficulty]).replace('\0', '0');
        return !block.getHash().substring(0, difficulty).equals(leadingZeros);
    }

    public double getReward(){
        return this.reward;
    }
}
