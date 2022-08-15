package com.ugc.selections.Controller;

import com.ugc.selections.Entity.SelectedStudent;
import com.ugc.selections.Payload.Request.ALPassedRequest;
import com.ugc.selections.Payload.Request.ApplicantRequest;
import com.ugc.selections.Service.SelectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@RequestMapping
@CrossOrigin("*")
public class SelectionController  {

    private final SelectionService selectionService;
    private final RestTemplate restTemplate;

    @Autowired
    public SelectionController (SelectionService selectionService, RestTemplate restTemplate) {
        this.selectionService = selectionService;
        this.restTemplate = restTemplate;
    }

    @GetMapping(path = "selectStudents")
    public List<SelectedStudent> selectStudents(){

        // Get all the applicants
        ApplicantRequest applicants = restTemplate.getForObject("http://localhost:8081/student/applicants", ApplicantRequest.class);
        ////System.out.println(applicants.getIndexNumbers());

        // Get all the students who passed A/L
        ALPassedRequest alResultRequest = restTemplate.getForObject("http://localhost:8083/staff/alPassed", ALPassedRequest.class);

        // Filter and get the students who are eligible by A/L Results
        Map<String, String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);

        // Separate students of each stream
        List<String> physicsStream = eligibleStudents.entrySet()
                .stream().distinct().filter(e-> e.getValue() == "Physics")
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
                .values().stream().toList();

        List<String> biologyStream = eligibleStudents.entrySet()
                .stream().distinct().filter(e-> e.getValue() == "Biology")
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
                .values().stream().toList();

        List<String> commerceStream = eligibleStudents.entrySet()
                .stream().distinct().filter(e-> e.getValue() == "Commerce")
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
                .values().stream().toList();

        List<String> artStream = eligibleStudents.entrySet()
                .stream().distinct().filter(e-> e.getValue() == "Art")
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
                .values().stream().toList();
    }
}
