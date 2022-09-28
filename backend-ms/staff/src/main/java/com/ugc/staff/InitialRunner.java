package com.ugc.staff;

import com.ugc.staff.Service.ALSubjectService;
import com.ugc.staff.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {

    private final StaffService staffService;
    private final ALSubjectService alSubjectService;


    @Autowired
    public InitialRunner(StaffService staffService, ALSubjectService alSubjectService) {
        this.staffService = staffService;
        this.alSubjectService = alSubjectService;
    }

    @Override
    public void run(String... args) throws Exception {
        staffService.initRoles();
        staffService.initOfficeDept();
        alSubjectService.initSubjects();
    }
}
