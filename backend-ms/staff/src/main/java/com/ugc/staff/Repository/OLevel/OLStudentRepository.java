package com.ugc.staff.Repository.OLevel;
import com.ugc.staff.Model.OLevel.OLResultKey;
import com.ugc.staff.Model.OLevel.OLResults;
import com.ugc.staff.Model.OLevel.OLStudentResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OLStudentRepository extends JpaRepository<OLStudentResult, OLResultKey> {
    List<OLStudentResult> findById_studentId(Integer Id);

    OLStudentResult getById(OLResultKey key);
}
