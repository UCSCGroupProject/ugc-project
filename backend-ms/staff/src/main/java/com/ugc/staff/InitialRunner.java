package com.ugc.staff;

import com.ugc.staff.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {

    private final StaffService staffService;


    @Autowired
    public InitialRunner(StaffService staffService) {
        this.staffService = staffService;
    }

    @Override
    public void run(String... args) throws Exception {
        staffService.initRoles();
        staffService.initOfficeDept();
    }
}
