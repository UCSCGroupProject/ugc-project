package com.ugc.school.repository.document;

import com.ugc.school.model.document.StudentRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRecordRepository extends JpaRepository<StudentRecord, Integer> {
}
