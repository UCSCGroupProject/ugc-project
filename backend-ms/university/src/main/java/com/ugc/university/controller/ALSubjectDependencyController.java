package com.ugc.university.controller;

import com.ugc.university.payload.request.alsubject.Req_ALSubjectsWithResults;
import com.ugc.university.payload.request.alsubject.Req_ChoosedALSubjects;
import com.ugc.university.service.alsubject.ALSubjectDependencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university/course/alsubjectdependency")
public class ALSubjectDependencyController {
    @Autowired
    private ALSubjectDependencyService alSubjectDependencyService;

    @PostMapping("/check")
    public Boolean performDependencyCheck(@RequestBody Req_ChoosedALSubjects req_choosedALSubjects) {
        System.out.println(req_choosedALSubjects);
        return alSubjectDependencyService.performDependencyCheck(req_choosedALSubjects);
    }

    @PostMapping("/checkwithresults")
    public Boolean performDependencyCheck(@RequestBody Req_ALSubjectsWithResults req_alSubjectsWithResults) {
        System.out.println(req_alSubjectsWithResults);
        return alSubjectDependencyService.performDependencyCheckWithResults(req_alSubjectsWithResults);
    }
}
