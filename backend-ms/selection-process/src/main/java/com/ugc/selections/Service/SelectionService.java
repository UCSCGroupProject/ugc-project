package com.ugc.selections.Service;

import com.ugc.selections.Entity.ATPassedStudent;
import com.ugc.selections.Entity.SelectedStudent;
import com.ugc.selections.Repository.ALPassedStudentRepository;
import com.ugc.selections.Repository.ATPassedStudentRepository;
import com.ugc.selections.Repository.AppliedStudentRepository;
import com.ugc.selections.Entity.ALPassedStudent;
import com.ugc.selections.Entity.AppliedStudent;
import com.ugc.selections.Repository.SelectedStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class SelectionService{

    private final AppliedStudentRepository appliedStudentRepository;
    private final ALPassedStudentRepository alPassedStudentRepository;
    private final SelectedStudentRepository selectedStudentRepository;
    private final ATPassedStudentRepository atPassedStudentRepository;

    @Autowired
    public SelectionService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository, SelectedStudentRepository selectedStudentRepository, ATPassedStudentRepository atPassedStudentRepository){
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
        this.selectedStudentRepository = selectedStudentRepository;
        this.atPassedStudentRepository = atPassedStudentRepository;

    }

    public List<AppliedStudent> getAppliedStudents() {

        return appliedStudentRepository.findAll();
    }

    public List<ALPassedStudent> getALPassedStudents() {

        return alPassedStudentRepository.findAll();
    }

    public List<SelectedStudent> selectedStudents() {

        return selectedStudentRepository.findAll();
    }

    public List<ATPassedStudent> getATPassedStudents() {

        return atPassedStudentRepository.findAll();
    }

    public void selectStudents(List<AppliedStudent> appliedStudents, List<ALPassedStudent> alPassedStudents, List<ATPassedStudent> atPassedStudents) {
//        Find eligible students for selection process
//        Must satisfy 3 conditions
//        1. Must have applied
//        2. Must have passed AL
//        3. Must have passed AT for relevant courses

    }
}
