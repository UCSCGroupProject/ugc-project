package com.ugc.zscore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ZScoreApplication {
    public static void main(String[] args) {
        SpringApplication.run(ZScoreApplication.class, args);
    }
}
