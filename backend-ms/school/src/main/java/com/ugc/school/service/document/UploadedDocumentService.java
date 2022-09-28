package com.ugc.school.service.document;

import com.ugc.school.model.defaultschool.DefaultSchool;
import com.ugc.school.model.document.UploadedDocument;
import com.ugc.school.model.document.ValidationDocument;
import com.ugc.school.payload.response.PayloadResponse;
import com.ugc.school.payload.response.ResType;
import com.ugc.school.payload.response.objects.ResUploadedDocument;
import com.ugc.school.repository.defaultSchool.DefaultSchoolRepository;
import com.ugc.school.repository.document.UploadedDocumentRepository;
import com.ugc.school.repository.document.ValidationDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UploadedDocumentService {
    @Autowired
    private UploadedDocumentRepository uploadedDocumentRepository;
    @Autowired
    private DefaultSchoolRepository defaultSchoolRepository;
    @Autowired
    private ValidationDocumentRepository validationDocumentRepository;

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

    public ResponseEntity<?> getDocuments() {
        List<DefaultSchool> defaultSchoolList = defaultSchoolRepository.findAll();

        List<ResUploadedDocument> resUploadedDocuments = new ArrayList<>();

        defaultSchoolList.forEach(item -> {
            ResUploadedDocument resUploadedDocument = new ResUploadedDocument();

            resUploadedDocument.setSchoolId(item.getId());
            resUploadedDocument.setSchoolName(item.getName());
            resUploadedDocument.setDistrictName(item.getDistrict().getName());

            // Get validation document
            ValidationDocument validationDocument = validationDocumentRepository.findDocumentBySchoolId(item.getId());

            if(validationDocument != null) {
                resUploadedDocument.setDocumentId(validationDocument.getId());
                if(validationDocument.getStatus() == true) {
                    resUploadedDocument.setStatus("Validated");

                    // Get file
                    UploadedDocument uploadedDocument = uploadedDocumentRepository.findUploadedDocumentByDocumentId(validationDocument.getId());

                    if(uploadedDocument != null) {
                        resUploadedDocument.setFileId(uploadedDocument.getFileId());
                    }
                } else {
                    resUploadedDocument.setStatus("Pending");
                }
            }

            resUploadedDocuments.add(resUploadedDocument);
        });

        return ResponseEntity.ok(new PayloadResponse(resUploadedDocuments, "Validation documents found", ResType.OK));
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
