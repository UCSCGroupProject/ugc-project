package com.ugc.school.controller;

import com.ugc.school.service.document.UploadedDocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/document/upload")
public class UploadedDocumentController {
    @Autowired
    private UploadedDocumentService uploadedDocumentService;

    // Upload document
    @PostMapping("")
    public ResponseEntity<?> uploadDocument(@RequestParam("documentId") Integer documentId, @RequestParam Integer fileId) {
        return uploadedDocumentService.uploadDocument(documentId, fileId);
    }

    // Check upload document existance
    @GetMapping("/check")
    public Boolean isUploadDocumentExist(@RequestParam("documentId") Integer documentId)  {
        return uploadedDocumentService.isUploadDocumentExist(documentId);
    }

    @DeleteMapping
    public Integer deleteUploadDocument(@RequestParam("documentId") Integer documentId) {
        return uploadedDocumentService.deleteUploadDocument(documentId);
    }
}
