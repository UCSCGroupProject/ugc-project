package com.ugc.staff.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {
    @Autowired
    StaffService staffService;

    @Override
    public void run(String... args) throws Exception {
        staffService.initRoles();
        staffService.initOfficeDept();
    }
}
