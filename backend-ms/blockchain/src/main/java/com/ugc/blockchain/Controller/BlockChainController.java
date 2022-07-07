package com.ugc.blockchain.Controller;

import com.ugc.blockchain.Service.BlockChainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlockChainController {
    @Autowired
    BlockChainService blockChainService;

    @GetMapping("/blockchain/test")
    public void test(){
        blockChainService.test();
    }
}
