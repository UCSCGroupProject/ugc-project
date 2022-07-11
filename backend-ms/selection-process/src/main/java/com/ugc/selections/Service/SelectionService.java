package com.ugc.selections.Service;

import com.ugc.selections.Entity.SelectedStudent;
import com.ugc.selections.Repository.ALPassedStudentRepository;
import com.ugc.selections.Repository.AppliedStudentRepository;
import com.ugc.selections.Entity.ALPassedStudent;
import com.ugc.selections.Entity.AppliedStudent;
import com.ugc.selections.Repository.SelectedStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SelectionService {

    private final AppliedStudentRepository appliedStudentRepository;
    private final ALPassedStudentRepository alPassedStudentRepository;
    private final SelectedStudentRepository selectedStudentRepository;

    @Autowired
    public SelectionService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository, SelectedStudentRepository selectedStudentRepository){
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
        this.selectedStudentRepository = selectedStudentRepository;
    }

    public List<AppliedStudent> getAppliedStudents() {
        return appliedStudentRepository.findAll();
    }

    public List<ALPassedStudent> getALPassedStudents() {
        return alPassedStudentRepository.findAll();
    }

    public List<SelectedStudent> selectStudents() {
        return selectedStudentRepository.findAll();
    }
}
