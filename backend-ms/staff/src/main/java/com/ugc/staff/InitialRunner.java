package com.ugc.staff;

import com.ugc.staff.Service.ALevel.ALSubjectService;
import com.ugc.staff.Service.OLevel.OLSubjectService;
import com.ugc.staff.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {

    private final StaffService staffService;
    private final ALSubjectService alSubjectService;
    private final OLSubjectService olSubjectService;

    @Autowired
    public InitialRunner(StaffService staffService, ALSubjectService alSubjectService, OLSubjectService olSubjectService) {
        this.staffService = staffService;
        this.alSubjectService = alSubjectService;
        this.olSubjectService = olSubjectService;
    }

    @Override
    public void run(String... args) throws Exception {
        staffService.initRoles();
        staffService.initOfficeDept();
        staffService.initStaff();
        alSubjectService.initSubjects();
        olSubjectService.initSubjects();
    }
}
