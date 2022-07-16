package com.ugc.staff.Service;

import com.ugc.staff.Model.ALPassedStudent;
import com.ugc.staff.Model.ATPassedStudent;
import com.ugc.staff.Model.AppliedStudent;
import com.ugc.staff.Repository.ALPassedStudentRepository;
import com.ugc.staff.Repository.ATPassedStudentRepository;
import com.ugc.staff.Repository.AppliedStudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {
    private final AppliedStudentRepository appliedStudentRepository;
    private final ALPassedStudentRepository alPassedStudentRepository;
    private final ATPassedStudentRepository atPassedStudentRepository;

    public StaffService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository, ATPassedStudentRepository atPassedStudentRepository) {
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
        this.atPassedStudentRepository = atPassedStudentRepository;
    }

    public List<AppliedStudent> getAppliedStudents() {
        return appliedStudentRepository.findAll();
    }

    public List<ALPassedStudent> getALPassedStudents() {
        return alPassedStudentRepository.findAll();
    }

    public List<ATPassedStudent> getATPassedStudents() {
        return atPassedStudentRepository.findAll();
    }
}
