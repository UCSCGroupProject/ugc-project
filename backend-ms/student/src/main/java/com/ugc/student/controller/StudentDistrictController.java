package com.ugc.student.controller;

import com.ugc.student.payload.response.selection.DistrictRequest;
import com.ugc.student.service.StudentDistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student/district")
public class StudentDistrictController {

    @Autowired
    private final StudentDistrictService studentDistrictService;

    public StudentDistrictController(StudentDistrictService studentDistrictService) {
        this.studentDistrictService = studentDistrictService;
    }

    @GetMapping("/getStudentDistricts")
    public DistrictRequest getStudentDistricts(){
        return studentDistrictService.getStudentDistricts();
    }
}
