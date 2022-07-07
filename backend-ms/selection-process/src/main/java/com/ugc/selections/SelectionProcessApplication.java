package com.ugc.selections;

import com.ugc.selections.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class SelectionProcessApplication {
    public static void main(String[] args) {
        SpringApplication.run(SelectionProcessApplication.class, args);
    }
}
