package com.ugc.blockchain;

import com.ugc.blockchain.service.BlockChainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {
    @Autowired
    BlockChainService blockChainService;

    @Override
    public void run(String... args) throws Exception {
        blockChainService.clearBlockchain();

        blockChainService.addGenesisBlockToBlockChain();
    }
}
