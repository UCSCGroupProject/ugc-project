package com.ugc.school.controller;

import com.ugc.school.payload.request.defaultSchool.Req_DefaultSchool;
import com.ugc.school.service.defaultSchool.DefaultSchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/default")
public class DefaultSchoolController {
    @Autowired
    private DefaultSchoolService defaultSchoolService;

    // Create
    @PostMapping("")
    public ResponseEntity<?> createSchool(@RequestBody Req_DefaultSchool req_defaultSchool) {
        return defaultSchoolService.createSchool(req_defaultSchool);
    }

    // Read
    @GetMapping("")
    public ResponseEntity<?> getSchool(@RequestParam Integer schoolId) {
        return defaultSchoolService.getSchool(schoolId);
    }

    // Read all
    @GetMapping("/all")
    public ResponseEntity<?> getAllSchools() {
        return defaultSchoolService.getAllSchools();
    }

    // Update
    @PutMapping("")
    public ResponseEntity<?> updateSchool(@RequestBody Req_DefaultSchool req_defaultSchool, @RequestParam Integer schoolId)  {
        return defaultSchoolService.updateSchool(req_defaultSchool, schoolId);
    }

    // TODO: Delete
    @DeleteMapping("")
    public ResponseEntity<?> deleteSchool(@RequestParam Integer schoolId) {
        return defaultSchoolService.deleteSchool(schoolId);
    }
}
