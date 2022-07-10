package com.ugc.selections.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping
@CrossOrigin("*")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping(path = "appliedStudents")
    public List<Student> getAppliedStudents(){
        return studentService.getAppliedStudents();
    }

    @GetMapping(path = "ALPassedStudents")
    public List<Student> getALPassedStudents(){
        return studentService.getALPassedStudents();
    }
}
