package com.ugc.school.repository.document;

import com.ugc.school.model.document.ValidationDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValidationDocumentRepository extends JpaRepository<ValidationDocument, Integer> {
    ValidationDocument findDocumentBySchoolId(Integer schoolId);
}
