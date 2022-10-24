package com.ugc.school.controller;

import com.ugc.school.payload.response.document.ResValidationDocument;
import com.ugc.school.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/support/document")
public class SupportController {
    @Autowired
    public SupportService supportService;

    // Get Document
    @GetMapping("")
    public ResValidationDocument getDocument(@RequestParam(name = "username") String username) {
        return supportService.getDocument(username);
    }
}
