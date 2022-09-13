package com.ugc.school.controller;

import com.ugc.school.payload.request.studentValidation.ReqBlockData;
import com.ugc.school.payload.request.studentValidation.Transaction;
import com.ugc.school.payload.response.MessageResponse;
import com.ugc.school.service.StudentValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school/student")
public class StudentValidationController {
    @Autowired
    StudentValidationService studentValidationService;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/getStudentValidationList")
    public List<Transaction> getStudentValidationList() {
        List<Transaction> temp = new ArrayList<>();

        Transaction t1 = new Transaction(
                "1",
                "1236547",
                "L.A.D.D.S. GUNAWARDHANA",
                "199931712165",
                "2011-10-03",
                "2015-3-06",
                false
        );

        temp.add(t1);

        return temp;
    }

    @PostMapping("/validateAndPublishStudentList")
    public ResponseEntity<?> validateAndPublishStudentList(@RequestBody ReqBlockData reqBlockData) {
        ReqBlockData block = studentValidationService.validateAndPublishStudentList(reqBlockData);
        System.out.println(block);

        String res = restTemplate.postForObject("http://localhost:5/blockchain/addblock", block, String.class);

        return ResponseEntity.ok(new MessageResponse(res));
    }
}
