package com.ugc.school;

import com.ugc.school.service.defaultSchool.DefaultSchoolService;
import com.ugc.school.service.defaultSchool.DistrictService;
import com.ugc.school.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {
    @Autowired
    SchoolService schoolService;
    @Autowired
    DistrictService districtService;
    @Autowired
    DefaultSchoolService defaultSchoolService;

    @Override
    public void run(String... args) throws Exception {
        schoolService.initRoles();
        schoolService.initSchools();
        districtService.initDistricts();
//        defaultSchoolService.initSchools();
    }
}
