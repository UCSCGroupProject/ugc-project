package com.ugc.school.service.document;

import com.ugc.school.model.document.UploadedDocument;
import com.ugc.school.payload.response.PayloadResponse;
import com.ugc.school.payload.response.ResType;
import com.ugc.school.repository.document.UploadedDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UploadedDocumentService {
    @Autowired
    private UploadedDocumentRepository uploadedDocumentRepository;

    // Upload document
    public ResponseEntity<?> uploadDocument(Integer documentId, Integer fileId) {
        if(documentId != null && fileId != null) {
            UploadedDocument uploadedDocument = new UploadedDocument(documentId, fileId);

            uploadedDocumentRepository.save(uploadedDocument);

            return ResponseEntity.ok(new PayloadResponse(null, "Document successfully uploaded", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Document uploading failed", ResType.BAD));
        }
    }

    public Boolean isUploadDocumentExist(Integer documentId) {
        UploadedDocument uploadedDocument = uploadedDocumentRepository.findUploadedDocumentByDocumentId(documentId);

        if(uploadedDocument != null) {
            return true;
        } else {
            return false;
        }
    }

    public Integer deleteUploadDocument(Integer documentId) {
        UploadedDocument uploadedDocument = uploadedDocumentRepository.findUploadedDocumentByDocumentId(documentId);

        if(uploadedDocument != null) {
            uploadedDocumentRepository.deleteById(uploadedDocument.getId());
            return uploadedDocument.getFileId();
        } else {
            return null;
        }
    }
}
