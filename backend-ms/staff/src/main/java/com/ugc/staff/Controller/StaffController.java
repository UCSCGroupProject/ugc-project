package com.ugc.staff.Controller;

import com.ugc.staff.Model.ALPassedStudent;
import com.ugc.staff.Model.ATPassedStudent;
import com.ugc.staff.Model.AppliedStudent;
import com.ugc.staff.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin("*")
public class StaffController {
    private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @GetMapping(path = "appliedStudents")
    public List<AppliedStudent> getAppliedStudents(){
        return staffService.getAppliedStudents();
    }

    @GetMapping(path = "ALPassedStudents")
    public List<ALPassedStudent> getALPassedStudents(){
        return staffService.getALPassedStudents();
    }

    @GetMapping(path = "ATPassedStudents")
    public List<ATPassedStudent> getATPassedStudents(){
        return staffService.getATPassedStudents();
    }

}
