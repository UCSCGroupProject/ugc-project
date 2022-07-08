package com.ugc.blockchain.controller;

import com.ugc.blockchain.crypto.blockchain.Block;
import com.ugc.blockchain.crypto.blockchain.BlockChain;
import com.ugc.blockchain.crypto.signing.ECDSAHelper;
import com.ugc.blockchain.crypto.wallet.Wallet;
import com.ugc.blockchain.payload.request.ReqBlockValidity;
import com.ugc.blockchain.payload.response.ResBlockChain;
import com.ugc.blockchain.payload.response.ResBlockValidityMessage;
import com.ugc.blockchain.service.BlockChainService;
import com.ugc.blockchain.payload.request.ReqBlockData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;

@RestController
@RequestMapping("/blockchain")
public class BlockChainController {
    @Autowired
    BlockChainService blockChainService;

    // Default functions to run initially
    @Bean
    CommandLineRunner runner(){
        return  args -> {
            blockChainService.addGenesisBlockToBlockChain();
        };
    }

    @PostMapping("/addblock")
    public void addBlockToBlockChain(@RequestBody ReqBlockData reqBlockData){
        blockChainService.addBlockToBlockChain(reqBlockData);
    }

    @GetMapping("/getblockchain")
    public ResBlockChain getBlockChain(){
        ResBlockChain resBlockChain = new ResBlockChain();

        BlockChain blockChain = blockChainService.getBlockChain();
        resBlockChain.setBlockChain(blockChain.getBlockChain());

        System.out.println(blockChain.toString());

        return resBlockChain;
    }

    @GetMapping("/verifyblock")
    public ResBlockValidityMessage verifyBlock(@RequestBody ReqBlockValidity reqBlockValidity){
        return blockChainService.verifyBlock(reqBlockValidity.getBlockId(), reqBlockValidity.getPublicKey());
    }
}
