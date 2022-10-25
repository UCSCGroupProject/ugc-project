package com.ugc.staff.Repository.OLevel;
import com.ugc.staff.Model.OLevel.OLResultKey;
import com.ugc.staff.Model.OLevel.OLStudentResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OLStudentResultRepository extends JpaRepository<OLStudentResult, OLResultKey> {
    List<OLStudentResult> findById_studentId(Integer Id);

    OLStudentResult getById(OLResultKey key);

    @Query("SELECT t.grade FROM OLStudentResult t WHERE t.id=?1 AND t.olSubject=?2")
    String getSubjectResult(String index, String subject);
}
