package com.ugc.staff.Repository.ALevel;

import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.ALevel.ALStudentResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ALStudentRepository extends JpaRepository<ALStudentResult, Integer> {
    List<ALStudentResult> findByAlResults(ALResults Id);
}
