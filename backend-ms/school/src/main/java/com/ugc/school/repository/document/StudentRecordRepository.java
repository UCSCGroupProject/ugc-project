package com.ugc.school.repository.document;

import com.ugc.school.model.document.StudentRecord;
import com.ugc.school.model.document.ValidationDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRecordRepository extends JpaRepository<StudentRecord, Integer> {
    StudentRecord findStudentRecordById(Integer id);

    List<StudentRecord> findStudentRecordsByDocument(ValidationDocument document);
}
