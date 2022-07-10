package com.ugc.selections.Student;

import com.ugc.selections.Repository.ALPassedStudentRepository;
import com.ugc.selections.Repository.AppliedStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentService {

    private final AppliedStudentRepository appliedStudentRepository;
    private final ALPassedStudentRepository alPassedStudentRepository;

    @Autowired
    public StudentService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository){
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
    }

    public List<Student> getAppliedStudents() {
        return appliedStudentRepository.findAll();
    }

    public List<Student> getALPassedStudents() {
        return alPassedStudentRepository.findAll();
    }
}
