package com.ugc.student;

import com.ugc.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {
    @Autowired
    StudentService studentService;

    @Override
    public void run(String... args) throws Exception {
        studentService.initRoles();
        studentService.initStudents();
    }
}
