package com.ugc.school.controller;

import com.ugc.school.payload.request.document.ReqValidationDocument;
import com.ugc.school.service.document.ValidationDocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/document")
public class ValidationDocumentController {
    @Autowired
    private ValidationDocumentService validationDocumentService;

    // Get Document
    @GetMapping("")
    public ResponseEntity<?> getDocument(@RequestParam(name = "schoolId") Integer schoolId) {
        return validationDocumentService.getDocument(schoolId);
    }

    // Create document
    @PostMapping("")
    public ResponseEntity<?> createDocument(@RequestBody ReqValidationDocument reqValidationDocument) {
        return validationDocumentService.createDocument(reqValidationDocument);
    }

    // TODO: Update Document

}
