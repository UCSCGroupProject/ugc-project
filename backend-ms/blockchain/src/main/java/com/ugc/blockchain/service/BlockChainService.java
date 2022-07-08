package com.ugc.blockchain.service;

import com.ugc.blockchain.crypto.blockchain.Block;
import com.ugc.blockchain.crypto.blockchain.BlockChain;
import com.ugc.blockchain.crypto.constants.Constants;
import com.ugc.blockchain.crypto.cryptocurrency.Transaction;
import com.ugc.blockchain.crypto.miner.Miner;
import com.ugc.blockchain.crypto.signing.ECDSAHelper;
import com.ugc.blockchain.crypto.wallet.Wallet;
import com.ugc.blockchain.payload.request.ReqBlockData;
import com.ugc.blockchain.payload.response.ResBlockValidityMessage;
import com.ugc.blockchain.repository.BlockChainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.PublicKey;
import java.util.ArrayList;
import java.util.List;

@Service
public class BlockChainService {
    @Autowired
    BlockChainRepository blockChainRepository;

    BlockChain blockChain = new BlockChain();
    Miner miner = new Miner();
    List<Transaction> transactions = new ArrayList<>();

    public void addGenesisBlockToBlockChain(){
        List<Transaction> transactions = new ArrayList<>();

        Transaction transaction1 = new Transaction("1", "1032288", "ABC", "200120402367", "2010-06-20", "2012-01-20");
        transactions.add(transaction1);

        Wallet lender = new Wallet();

        System.out.println(lender.getPublicKey());
        System.out.println(lender.getPrivateKey());

        Block block0 = new Block(0,
                                transactions,
                                "UGC",
                                "UGC",
                                lender.getPublicKeyAsString(),
                                Constants.GENESIS_PREV_HASH);

        Block b = miner.mine(block0, blockChain, lender.getPrivateKey());

        // Save on the public ledger (MongoDB)
        saveBlockOnBlockChain(b);
    }

    public void addBlockToBlockChain(ReqBlockData reqBlockData){
        Wallet userA = new Wallet();

        Block block = new Block(
                2,
                reqBlockData.getTransactions(),
                reqBlockData.getCreatorName(),
                reqBlockData.getCreatorAddress(),
                userA.getPublicKeyAsString(),
                blockChain.getBlockChain().get(blockChain.size() - 1).getHash());

        Block b = miner.mine(block, blockChain, userA.getPrivateKey());

        // Save on the public ledger (MongoDB)
        saveBlockOnBlockChain(b);
    }

    public BlockChain getBlockChain(){
        return blockChain;
    }

    public ResBlockValidityMessage verifyBlock(Integer blockId, String publicKey) {
        ResBlockValidityMessage message = new ResBlockValidityMessage();

        for(Block block: blockChain.getBlockChain()){
            // Found the block, then verify it
            if(block.getId() == blockId){
                // Public keys are different
                String publicKeyInBlock = block.getCreatorPublicKey();
                String publicKeyInRequest = publicKey;

                if(!publicKeyInBlock.equals(publicKeyInRequest)) {
                    message.setValid(false);
                    message.setMessage("Block creator public key and provided public key is not matching");
                    return message;
                }

                // If public keys are matched then check whether the block is verified or not
                if(block.verifyBlock()) {
                    message.setValid(true);
                    message.setMessage("Block is valid");
                    return message;
                }
                else{
                    message.setValid(false);
                    message.setMessage("Block creator signature is not verified");
                    return message;
                }
            }
        }

        // No block found
        message.setValid(false);
        message.setMessage("Block not found");
        return message;
    }

    public void saveBlockOnBlockChain(Block block){
        com.ugc.blockchain.model.Block newBlock = new com.ugc.blockchain.model.Block();

        newBlock.setId(block.getId());
        newBlock.setTransactions(block.getTransactions());
        newBlock.setCreatorName(block.getCreatorName());
        newBlock.setCreatorAddress(block.getCreatorAddress());
        newBlock.setCreatorPublicKey(block.getCreatorPublicKey());
        newBlock.setCreatorSignature(block.getCreatorSignature());
        newBlock.setPreviousHash(block.getPreviousHash());
        newBlock.setHash(block.getHash());
        newBlock.setNonce(block.getNonce());
        newBlock.setTimeStamp(block.getTimeStamp());

        blockChainRepository.save(newBlock);
    }
}
