package com.ugc.school.controller;

import com.ugc.school.payload.request.studentValidation.Transaction;
import com.ugc.school.service.StudentValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/student")
public class StudentValidationController {
//    @Autowired
//    StudentValidationService studentValidationService;
//
//    @PostMapping("/student/validateAndPublishStudentList")
//    public ResponseEntity<?> validateAndPublishStudentList(@RequestBody List<Transaction> studentList) {
//        studentValidationService.validateAndPublishStudentList(studentList);
//    }
}
