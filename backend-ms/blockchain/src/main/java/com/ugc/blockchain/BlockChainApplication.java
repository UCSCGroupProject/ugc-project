package com.ugc.blockchain;

import com.ugc.blockchain.Service.BlockChainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BlockChainApplication {
    public static void main(String[] args) {
        SpringApplication.run(BlockChainApplication.class, args);
    }
}
