package com.ugc.crypto;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import java.security.Security;

@SpringBootApplication
@EnableEurekaClient
public class CryptoSignerApplication {
    public static void main(String[] args) {
        Security.addProvider(new BouncyCastleProvider());

        SpringApplication.run(CryptoSignerApplication.class, args);
    }
}
