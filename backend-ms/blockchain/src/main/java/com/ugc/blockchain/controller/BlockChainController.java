package com.ugc.blockchain.controller;

import com.ugc.blockchain.crypto.blockchain.BlockChain;
import com.ugc.blockchain.payload.request.ReqBlockValidity;
import com.ugc.blockchain.payload.response.ResBlockChain;
import com.ugc.blockchain.payload.response.ResBlockValidityMessage;
import com.ugc.blockchain.payload.response.ResKeyPair;
import com.ugc.blockchain.service.BlockChainService;
import com.ugc.blockchain.payload.request.ReqBlockData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/blockchain")
public class BlockChainController {
    @Autowired
    BlockChainService blockChainService;


    @PostMapping("/addblock")
    public String addBlockToBlockChain(@RequestBody ReqBlockData reqBlockData){
        blockChainService.addBlockToBlockChain(reqBlockData);

        return "Block added successfully";
    }

    @GetMapping("/getblockchain")
    public ResponseEntity<?> getBlockChain(){
        ResBlockChain resBlockChain = new ResBlockChain();

        BlockChain blockChain = blockChainService.getBlockChain();
        resBlockChain.setBlockChain(blockChain.getBlockChain());

//        System.out.println(blockChain.toString());
        System.out.println(resBlockChain);

        return ResponseEntity.ok(resBlockChain);
    }

    @GetMapping("/verifyBlock")
    public ResponseEntity<?> verifyBlock(@RequestParam(name = "blockId") Integer blockId, @RequestParam(name = "publicKey") String publicKey){
        ResBlockValidityMessage resBlockValidityMessage = blockChainService.verifyBlock(blockId, publicKey);

        System.out.println(resBlockValidityMessage);
        return ResponseEntity.ok(resBlockValidityMessage);
    }

    @GetMapping("/generateKeypair")
    public ResKeyPair generateKeypair() {
        return blockChainService.generateKeyPair();
    }
}
