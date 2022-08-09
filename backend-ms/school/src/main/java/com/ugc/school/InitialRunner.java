package com.ugc.school;

import com.ugc.school.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {
    @Autowired
    SchoolService schoolService;

    @Override
    public void run(String... args) throws Exception {
        schoolService.initRoles();
    }
}
