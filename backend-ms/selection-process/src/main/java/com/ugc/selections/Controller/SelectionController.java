package com.ugc.selections.Controller;

import com.google.common.collect.Lists;
import com.ugc.selections.Entity.SelectedStudent;
import com.ugc.selections.Payload.Request.*;
import com.ugc.selections.Service.SelectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
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
    public void selectStudents(){

        // Get all the applicants
        ApplicantRequest applicants = restTemplate.getForObject("http://localhost:8081/student/applicants", ApplicantRequest.class);

        // Get all the students who passed A/L
        ALPassedRequest alResultRequest = restTemplate.getForObject("http://localhost:8083/staff/alPassed", ALPassedRequest.class);

        // Filter and get the students who are eligible by A/L Results
        List<String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);

        //Sort according to ZScore
        ZScoreRequest zScoreRequest = restTemplate.getForObject("http://localhost:8083/staff/getZScore", ZScoreRequest.class);
        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);

        //Take top 40%
        Integer studentCount = sortedStudents.size();
        Integer meritPartition = Math.toIntExact(Math.round((studentCount * 0.4)));
        List<List<String>> subSets = Lists.partition(sortedStudents, meritPartition);
        List<String> meritStudents = subSets.get(0);

        //Get the applications of merits
        ApplicationRequest meritApplications = restTemplate.getForObject("http://localhost:8081/student/applications", ApplicationRequest.class);

        //Get the aptitude test results
        AptitudeTestResultRequest meritAptitudeTestResults = restTemplate.getForObject("http://localhost:8082/university/aptitudeTestResults", AptitudeTestResultRequest.class);

//      Get the course intake amounts
        CourseIntakeRequest courseIntakeRequest = restTemplate.getForObject("http://localhost:8082/university/getCourseIntake", CourseIntakeRequest.class);
        selectionService.meritSelection(meritStudents, meritApplications, meritAptitudeTestResults, courseIntakeRequest);

        //-----------------TESTING-------------------------//

        //TEST DATA
//        List<String> indexApplicants= new ArrayList<>();
//        indexApplicants.add("5356430");
//        indexApplicants.add("5451215");
//        indexApplicants.add("1162667");
//        indexApplicants.add("5623856");
//        indexApplicants.add("1234567");
//        indexApplicants.add("8564239");
//        ApplicantRequest applicantRequest = new ApplicantRequest(indexApplicants);
//
//        List<String> indexAL= new ArrayList<>();
//        indexAL.add("5356430");
//        indexAL.add("5451215");
//        indexAL.add("1162667");
//        indexAL.add("5623856");
//        indexAL.add("1234567");
//        indexAL.add("4567894");
//        ALPassedRequest alResultRequest = new ALPassedRequest(indexAL);
//
//        List<String> eligibleStudents = selectionService.getEligible(applicantRequest, alResultRequest);
//
//        Map<String, Double> zScoreIndex = new HashMap<>();
//        zScoreIndex.put("5356430", 1.85);
//        zScoreIndex.put("5451215", 1.8);
//        zScoreIndex.put("1162667", 1.7);
//        zScoreIndex.put("5623856", 1.6);
//        zScoreIndex.put("1234567", 1.9);
//        zScoreIndex.put("4567894", 0.4);
//        ZScoreRequest zScoreRequest = new ZScoreRequest(zScoreIndex);
//
//        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);
//
//        Integer studentCount = sortedStudents.size();
//        Integer meritPartition = Math.toIntExact(Math.round((studentCount * 0.4)));
//        List<List<String>> subSets = Lists.partition(sortedStudents, meritPartition);
//        List<String> meritStudents = subSets.get(0);
//
//        List<String> unicodeList1 = new ArrayList<>();
//        unicodeList1.add("a1");
//        unicodeList1.add("a2");
//        unicodeList1.add("a3");
//
//        List<String> unicodeList2 = new ArrayList<>();
//        unicodeList2.add("a2");
//        unicodeList2.add("a1");
//        unicodeList2.add("a4");
//
//        List<String> unicodeList3 = new ArrayList<>();
//        unicodeList3.add("a4");
//        unicodeList3.add("a1");
//        unicodeList3.add("a2");
//
//        List<String> unicodeList4 = new ArrayList<>();
//        unicodeList4.add("a2");
//        unicodeList4.add("a4");
//        unicodeList4.add("a1");
//
//        List<String> unicodeList5 = new ArrayList<>();
//        unicodeList5.add("a3");
//        unicodeList5.add("a1");
//        unicodeList5.add("a5");
//
//        Map<String, List<String>> applications = new HashMap<>();
//        applications.put("5356430", unicodeList1);
//        applications.put("5451215", unicodeList2);
//        applications.put("1162667", unicodeList3);
//        applications.put("5623856", unicodeList4);
//        applications.put("1234567", unicodeList5);
//        ApplicationRequest applicationRequest = new ApplicationRequest(applications);
//
//        Map<String, List<String>> aptitudeTestResults = new HashMap<>();
//        List<String> a1PassList = new ArrayList<>();
//        a1PassList.add("5356430");
//        a1PassList.add("5451215");
//        List<String> a2PassList = new ArrayList<>();
//        a2PassList.add("5356430");
//        a2PassList.add("1162667");
//
//        aptitudeTestResults.put("a1", a1PassList);
//        aptitudeTestResults.put("a2", a2PassList);
//        AptitudeTestResultRequest aptitudeTestResultRequest = new AptitudeTestResultRequest(aptitudeTestResults);
//
//        Map<String, Integer> courseIntake = new HashMap<>();
//        courseIntake.put("a1", 2);
//        courseIntake.put("a2", 2);
//        courseIntake.put("a3", 2);
//        courseIntake.put("a4", 1);
//        CourseIntakeRequest courseIntakeRequest = new CourseIntakeRequest(courseIntake);
//
//        selectionService.meritSelection(meritStudents, applicationRequest, aptitudeTestResultRequest, courseIntakeRequest);
    }
}
