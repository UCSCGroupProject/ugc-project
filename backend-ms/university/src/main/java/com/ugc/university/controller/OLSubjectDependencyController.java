package com.ugc.university.controller;

import com.ugc.university.payload.request.alsubject.Req_ALSubjectsWithResults;
import com.ugc.university.payload.request.olsubject.Req_OLSubjectsWithResults;
import com.ugc.university.service.olsubject.OLSubjectDependencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university/course/olsubjectdependency")
public class OLSubjectDependencyController {
    @Autowired
    private OLSubjectDependencyService olSubjectDependencyService;

    @PostMapping("/checkwithresults")
    public Boolean performDependencyCheck(@RequestBody Req_OLSubjectsWithResults req_olSubjectsWithResults) {
        return olSubjectDependencyService.performDependencyCheckWithResults(req_olSubjectsWithResults);
    }
}
