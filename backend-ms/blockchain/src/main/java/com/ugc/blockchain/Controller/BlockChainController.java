package com.ugc.blockchain.Controller;

import com.ugc.blockchain.BlockChain.Block;
import com.ugc.blockchain.BlockChain.BlockChain;
import com.ugc.blockchain.Cryptocurrency.Transaction;
import com.ugc.blockchain.Service.BlockChainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @GetMapping("/test")
    public void test(){
        blockChainService.test();
    }

    @PostMapping("/addblock")
    public void addBlockToBlockChain(@RequestBody List<Transaction> transactions){
        blockChainService.addBlockToBlockChain(transactions);
    }

    @GetMapping("/getblockchain")
    public List<Block> getBlockChain(){
        BlockChain blockChain = blockChainService.getBlockChain();

        List<Block> blocks = blockChain.getBlockChain();

        System.out.println(blocks.toString());

        return blocks;
    }
}
