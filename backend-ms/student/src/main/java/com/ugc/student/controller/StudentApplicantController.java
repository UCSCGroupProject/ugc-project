package com.ugc.student.controller;

import com.ugc.student.payload.response.selection.ApplicantRequest;
import com.ugc.student.payload.response.selection.ApplicationRequest;
import com.ugc.student.service.StudentApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student/applicant")
public class StudentApplicantController {

    @Autowired
    private final StudentApplicantService studentApplicantService;


    public StudentApplicantController(StudentApplicantService studentApplicantService) {
        this.studentApplicantService = studentApplicantService;
    }

    @GetMapping("/getApplicants")
    public ApplicantRequest getApplicants(){
        return studentApplicantService.getApplicants();
    }

    @GetMapping("/getApplications")
    public ApplicationRequest getApplications(){
        return studentApplicantService.getApplications();
    }
}
