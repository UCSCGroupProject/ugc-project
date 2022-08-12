package com.ugc.school.controller;

import com.ugc.school.payload.request.studentValidation.ReqBlockData;
import com.ugc.school.payload.response.MessageResponse;
import com.ugc.school.service.StudentValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/student")
public class StudentValidationController {
    @Autowired
    StudentValidationService studentValidationService;

    @Autowired
    RestTemplate restTemplate;

    @PostMapping("/validateAndPublishStudentList")
    public ResponseEntity<?> validateAndPublishStudentList(@RequestBody ReqBlockData reqBlockData) {
        ReqBlockData block = studentValidationService.validateAndPublishStudentList(reqBlockData);
        System.out.println(block);

        String res = restTemplate.postForObject("http://localhost:5/blockchain/addblock", block, String.class);

        return ResponseEntity.ok(new MessageResponse(res));
    }
}
