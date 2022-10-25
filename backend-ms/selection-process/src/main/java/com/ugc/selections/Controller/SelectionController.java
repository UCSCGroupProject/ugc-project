package com.ugc.selections.Controller;

import com.ugc.selections.Payload.Request.*;
import com.ugc.selections.Payload.Response.PayloadResponse;
import com.ugc.selections.Payload.Response.ResType;
import com.ugc.selections.Service.SelectionService;
import org.javatuples.Triplet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/selection")
public class SelectionController  {

    private final SelectionService selectionService;
    private final RestTemplate restTemplate;

    @Autowired
    public SelectionController (SelectionService selectionService, RestTemplate restTemplate) {
        this.selectionService = selectionService;
        this.restTemplate = restTemplate;
    }




    @GetMapping(path = "/selectStudents")
    public ResponseEntity<?> selectStudents(){

//        Get the list of courses with intakes
        CourseIntakeRequest courseIntakeRequest = restTemplate.getForObject("http://localhost:8082/api/university/unicode/getUnicodeIntake", CourseIntakeRequest.class);

//        Get all the applicants
        ApplicantRequest applicants = restTemplate.getForObject("http://localhost:8081/api/student/applicant/getApplicants", ApplicantRequest.class);

//        Get all the students who passed A/L
        ALPassedRequest alResultRequest = restTemplate.getForObject("http://localhost:8083/api/staff/alresults/getPassed", ALPassedRequest.class);

//        Filter and get the students who are eligible by A/L Results
        List<String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);

//        Sort according to ZScore
        ZScoreRequest zScoreRequest = restTemplate.getForObject("http://localhost:8083/api/staff/alresults/getZScore", ZScoreRequest.class);
        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);

//        Get merit intake amount for each course
        Map<String, Integer> meritCourseIntake = selectionService.getMeritIntake(courseIntakeRequest.getCourseIntake());

        for (String name: meritCourseIntake.keySet()) {
            String value = meritCourseIntake.get(name).toString();
            System.out.println(name + " " + value);
        }
//        Get applications of each student
        ApplicationRequest applications = restTemplate.getForObject("http://localhost:8081/api/student/applicant/getApplications", ApplicationRequest.class);

////        Get aptitude test results
//        AptitudeTestResultRequest aptitudeTestResults = restTemplate.getForObject("http://localhost:8082/university/aptitudeTestResults", AptitudeTestResultRequest.class);
//
////        Get courses that need OL results
//        OLUnicodeRequest olUnicodeRequest = restTemplate.getForObject("http://localhost:8083/staff/getOLUnicode", OLUnicodeRequest.class);
//
////        ------------------------------------------------MERIT SELECTION------------------------------------------------
//        selectionService.meritSelection(sortedStudents, applications, meritCourseIntake, aptitudeTestResults, olUnicodeRequest);
//
////        Get district quota intake amount for each course
//        Map<String, Integer> districtCourseIntake = selectionService.getDistrictIntake(courseIntakeRequest.getCourseIntake());
//
////        Map students to districts
//        DistrictRequest districtRequest = restTemplate.getForObject("http://localhost:8081/student/districts", DistrictRequest.class);
//
////        ------------------------------------------------DISTRICT QUOTA SELECTION------------------------------------------------
//        selectionService.districtSelection(sortedStudents, applications, districtCourseIntake, aptitudeTestResults, olUnicodeRequest, districtRequest);
//
////        Get ED quota intake amount for each course
//        Map<String, Integer> edCourseIntake = selectionService.getEDIntake(courseIntakeRequest.getCourseIntake());
//
////        ------------------------------------------------EDUCATIONALLY DISADVANTAGED SELECTION------------------------------------------------
//        selectionService.edSelection(sortedStudents, applications, edCourseIntake, aptitudeTestResults, olUnicodeRequest, districtRequest);

        Map<String, List<String>> aptitudeTestResults = new HashMap<>();
        List<String> c1PassList = new ArrayList<>();
        c1PassList.add("1945682151");
        c1PassList.add("1945682171");
        c1PassList.add("1945682199");
        c1PassList.add("1945682223");
        List<String> c2PassList = new ArrayList<>();
        c2PassList.add("1945682195");

        aptitudeTestResults.put("103A", c1PassList);
        aptitudeTestResults.put("009G", c2PassList);
        AptitudeTestResultRequest aptitudeTestResultRequest = new AptitudeTestResultRequest(aptitudeTestResults);

//        OLRequirements
        List<Triplet<String, String, String>> unicodeList = new ArrayList<>();
        Triplet<String, String, String> req1 = new Triplet<String, String, String>("106F", "11", "A");
        unicodeList.add(req1);

        OLUnicodeRequest olUnicodeRequest = new OLUnicodeRequest(unicodeList);

//        ------------------------------------------------MERIT SELECTION------------------------------------------------
        selectionService.meritSelection(sortedStudents, applications, meritCourseIntake, aptitudeTestResultRequest, olUnicodeRequest);
        System.out.println("Merit selection completed");
//        Get district quota intake amount for each course
        Map<String, Integer> districtCourseIntake = selectionService.getDistrictIntake(courseIntakeRequest.getCourseIntake());




//        Map students to districts
//        DistrictRequest districtRequest = new DistrictRequest(districtList);
        DistrictRequest districtRequest = restTemplate.getForObject("http://localhost:8081/api/student/district/getStudentDistricts", DistrictRequest.class);

//        ------------------------------------------------DISTRICT QUOTA SELECTION------------------------------------------------
        selectionService.districtSelection(sortedStudents, applications, districtCourseIntake, aptitudeTestResultRequest, olUnicodeRequest, districtRequest);
        System.out.println("District selection completed");
//        Get ED quota intake amount for each course
        Map<String, Integer> edCourseIntake = selectionService.getEDIntake(courseIntakeRequest.getCourseIntake());

//        ------------------------------------------------EDUCATIONALLY DISADVANTAGED SELECTION------------------------------------------------
        selectionService.edSelection(sortedStudents, applications, edCourseIntake, aptitudeTestResultRequest, olUnicodeRequest, districtRequest);
        System.out.println("ED selection completed");

        return ResponseEntity.ok(new PayloadResponse(null, "Selection successful", ResType.OK));
    }

    @GetMapping(path = "/getSelected")
    public ResponseEntity<?> getSelectedStudents(){
        return selectionService.getSelectedStudents();
    }
}
