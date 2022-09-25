package com.ugc.selections.Controller;

import com.ugc.selections.Payload.Request.*;
import com.ugc.selections.Service.SelectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;


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

//        Get the list of courses with intakes
        CourseIntakeRequest courseIntakeRequest = restTemplate.getForObject("http://localhost:8083/staff/getCourses", CourseIntakeRequest.class);

//        Get all the applicants
        ApplicantRequest applicants = restTemplate.getForObject("http://localhost:8081/student/applicants", ApplicantRequest.class);

//        Get all the students who passed A/L
        ALPassedRequest alResultRequest = restTemplate.getForObject("http://localhost:8083/staff/alPassed", ALPassedRequest.class);

//        Filter and get the students who are eligible by A/L Results
        List<String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);

//        Sort according to ZScore
        ZScoreRequest zScoreRequest = restTemplate.getForObject("http://localhost:8083/staff/getZScore", ZScoreRequest.class);
        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);

//        Get merit intake amount for each course
        Map<String, Integer> meritCourseIntake = selectionService.getMeritIntake(courseIntakeRequest.getCourseIntake());

//        Get applications of each student
        ApplicationRequest applications = restTemplate.getForObject("http://localhost:8081/student/applications", ApplicationRequest.class);

//        Get aptitude test results
        AptitudeTestResultRequest aptitudeTestResults = restTemplate.getForObject("http://localhost:8082/university/aptitudeTestResults", AptitudeTestResultRequest.class);

//        Get courses that need OL results
        OLUnicodeRequest olUnicodeRequest = restTemplate.getForObject("http://localhost:8083/staff/getOLUnicode", OLUnicodeRequest.class);

//        ------------------------------------------------MERIT SELECTION------------------------------------------------
        selectionService.meritSelection(sortedStudents, applications, meritCourseIntake, aptitudeTestResults, olUnicodeRequest);

//        Get district quota intake amount for each course
        Map<String, Integer> districtCourseIntake = selectionService.getDistrictIntake(courseIntakeRequest.getCourseIntake());

//        Map students to districts
        DistrictRequest districtRequest = restTemplate.getForObject("http://localhost:8081/student/districts", DistrictRequest.class);

//        ------------------------------------------------DISTRICT QUOTA SELECTION------------------------------------------------
        selectionService.districtSelection(sortedStudents, applications, districtCourseIntake, aptitudeTestResults, olUnicodeRequest, districtRequest);

//        Get ED quota intake amount for each course
        Map<String, Integer> edCourseIntake = selectionService.getEDIntake(courseIntakeRequest.getCourseIntake());

//        ------------------------------------------------EDUCATIONALLY DISADVANTAGED SELECTION------------------------------------------------
        selectionService.edSelection(sortedStudents, applications, edCourseIntake, aptitudeTestResults, olUnicodeRequest, districtRequest);
    }
}
