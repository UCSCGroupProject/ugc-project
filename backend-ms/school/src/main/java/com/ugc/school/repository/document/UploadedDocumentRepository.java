package com.ugc.school.repository.document;

import com.ugc.school.model.document.UploadedDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UploadedDocumentRepository extends JpaRepository<UploadedDocument, Integer> {
    UploadedDocument findUploadedDocumentByDocumentId(Integer documentId);
}
