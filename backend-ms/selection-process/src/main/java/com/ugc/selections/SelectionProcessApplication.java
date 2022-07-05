package com.ugc.selections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SelectionProcessApplication {
    public static void main(String[] args) {
        SpringApplication.run(SelectionProcessApplication.class, args);
    }
}
