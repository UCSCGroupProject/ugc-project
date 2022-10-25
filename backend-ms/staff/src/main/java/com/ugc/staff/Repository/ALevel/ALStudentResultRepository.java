package com.ugc.staff.Repository.ALevel;

import com.ugc.staff.Model.ALevel.ALResultKey;
import com.ugc.staff.Model.ALevel.ALStudentResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ALStudentResultRepository extends JpaRepository<ALStudentResult, ALResultKey> {
    List<ALStudentResult> findById_studentId(Integer Id);
    ALStudentResult getById(ALResultKey key);
}
