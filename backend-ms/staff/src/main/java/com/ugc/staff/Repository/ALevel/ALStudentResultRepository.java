package com.ugc.staff.Repository.ALevel;

import com.ugc.staff.Model.ALevel.ALResultKey;
import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.ALevel.ALStudentResult;
import com.ugc.staff.Model.ALevel.ALSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ALStudentResultRepository extends JpaRepository<ALStudentResult, ALResultKey> {
    List<ALStudentResult> findById_studentId(Integer Id);
    ALStudentResult getById(ALResultKey key);

    @Query("SELECT t.alSubject FROM ALStudentResult t WHERE t.alResults=?1")
    List<ALSubject> getResults(ALResults id);
}
