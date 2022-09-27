package com.ugc.selections.Controller;

import com.ugc.selections.Payload.Request.*;
import com.ugc.selections.Service.SelectionService;
import org.javatuples.Triplet;
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
    public void selectStudents(){

////        Get the list of courses with intakes
//        CourseIntakeRequest courseIntakeRequest = restTemplate.getForObject("http://localhost:8083/staff/getCourses", CourseIntakeRequest.class);
//
////        Get all the applicants
//        ApplicantRequest applicants = restTemplate.getForObject("http://localhost:8081/student/applicants", ApplicantRequest.class);
//
////        Get all the students who passed A/L
//        ALPassedRequest alResultRequest = restTemplate.getForObject("http://localhost:8083/staff/alPassed", ALPassedRequest.class);
//
////        Filter and get the students who are eligible by A/L Results
//        List<String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);
//
////        Sort according to ZScore
//        ZScoreRequest zScoreRequest = restTemplate.getForObject("http://localhost:8083/staff/getZScore", ZScoreRequest.class);
//        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);
//
////        Get merit intake amount for each course
//        Map<String, Integer> meritCourseIntake = selectionService.getMeritIntake(courseIntakeRequest.getCourseIntake());
//
////        Get applications of each student
//        ApplicationRequest applications = restTemplate.getForObject("http://localhost:8081/student/applications", ApplicationRequest.class);
//
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

//        ---------------------------------------TESTING-------------------------------------------------------
//        ------------------------------------------------------------------------------------------------------
        //        Get the list of courses with intakes
        Map<String, Integer> courseIntake = new HashMap<>();
        courseIntake.put("001A", 10);
        courseIntake.put("001B", 20);
        courseIntake.put("001C", 30);
        courseIntake.put("001D", 10);
        courseIntake.put("001E", 20);
        courseIntake.put("001F", 30);
        CourseIntakeRequest courseIntakeRequest = new CourseIntakeRequest(courseIntake);

        List<String> indexApplicants= new ArrayList<>();
        indexApplicants.add("1111111");
        indexApplicants.add("2222222");
        indexApplicants.add("3333333");
        indexApplicants.add("4444444");
        indexApplicants.add("5555555");
        indexApplicants.add("6666666");
        indexApplicants.add("7777777");
        indexApplicants.add("8888888");
        indexApplicants.add("9999999");
        indexApplicants.add("0000000");
        ApplicantRequest applicants = new ApplicantRequest(indexApplicants);

        List<String> indexAL= new ArrayList<>();
        indexAL.add("1111111");
        indexAL.add("2222222");
        indexAL.add("3333333");
        indexAL.add("4444444");
        indexAL.add("5555555");
        indexAL.add("6666666");
        indexAL.add("7777777");
        indexAL.add("8888888");
        indexAL.add("9999999");
        ALPassedRequest alResultRequest = new ALPassedRequest(indexAL);;

//        Filter and get the students who are eligible by A/L Results
        List<String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);

        Map<String, Double> zScoreIndex = new HashMap<>();
        zScoreIndex.put("1111111", 1.85);
        zScoreIndex.put("2222222", 1.8);
        zScoreIndex.put("3333333", 1.7);
        zScoreIndex.put("4444444", 1.6);
        zScoreIndex.put("5555555", 1.9);
        zScoreIndex.put("6666666", 0.4);
        zScoreIndex.put("7777777", 0.4);
        zScoreIndex.put("8888888", 0.4);
        zScoreIndex.put("9999999", 0.4);
        zScoreIndex.put("0000000", 0.02);
        ZScoreRequest zScoreRequest = new ZScoreRequest(zScoreIndex);
        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);

//        Get merit intake amount for each course
        Map<String, Integer> meritCourseIntake = selectionService.getMeritIntake(courseIntakeRequest.getCourseIntake());

        List<String> unicodeList1 = new ArrayList<>();
        unicodeList1.add("001A");
        unicodeList1.add("001B");
        unicodeList1.add("001C");

        List<String> unicodeList2 = new ArrayList<>();
        unicodeList2.add("001B");
        unicodeList2.add("001C");
        unicodeList2.add("001D");

        List<String> unicodeList3 = new ArrayList<>();
        unicodeList3.add("001C");
        unicodeList3.add("001D");
        unicodeList3.add("001E");

        List<String> unicodeList4 = new ArrayList<>();
        unicodeList4.add("001D");
        unicodeList4.add("001E");
        unicodeList4.add("001F");

        List<String> unicodeList5 = new ArrayList<>();
        unicodeList5.add("001A");
        unicodeList5.add("001C");
        unicodeList5.add("001B");

        List<String> unicodeList6 = new ArrayList<>();
        unicodeList5.add("001C");
        unicodeList5.add("001D");
        unicodeList5.add("001B");

        List<String> unicodeList7 = new ArrayList<>();
        unicodeList5.add("001F");
        unicodeList5.add("001C");
        unicodeList5.add("001B");

        List<String> unicodeList8 = new ArrayList<>();
        unicodeList5.add("001C");
        unicodeList5.add("001D");
        unicodeList5.add("001A");

        List<String> unicodeList9 = new ArrayList<>();
        unicodeList5.add("001B");
        unicodeList5.add("001F");
        unicodeList5.add("001C");

        List<String> unicodeList0 = new ArrayList<>();
        unicodeList5.add("001A");
        unicodeList5.add("001D");
        unicodeList5.add("001B");

        Map<String, List<String>> applicationsList = new HashMap<>();
        applicationsList.put("1111111", unicodeList1);
        applicationsList.put("2222222", unicodeList2);
        applicationsList.put("3333333", unicodeList3);
        applicationsList.put("4444444", unicodeList4);
        applicationsList.put("5555555", unicodeList5);
        applicationsList.put("6666666", unicodeList6);
        applicationsList.put("7777777", unicodeList7);
        applicationsList.put("8888888", unicodeList8);
        applicationsList.put("9999999", unicodeList9);
        applicationsList.put("0000000", unicodeList0);
        ApplicationRequest applications = new ApplicationRequest(applicationsList);

        Map<String, List<String>> aptitudeTestResults = new HashMap<>();
        List<String> c1PassList = new ArrayList<>();
        c1PassList.add("1111111");
        c1PassList.add("8888888");
        List<String> c2PassList = new ArrayList<>();
        c2PassList.add("2222222");

        aptitudeTestResults.put("001A", c1PassList);
        aptitudeTestResults.put("001B", c2PassList);
        AptitudeTestResultRequest aptitudeTestResultRequest = new AptitudeTestResultRequest(aptitudeTestResults);

        List<Triplet<String, String, String>> unicodeList = new ArrayList<>();
        Triplet<String, String, String> req1 = new Triplet<String, String, String>("001B", "Mathematics", "A");
        unicodeList.add(req1);

        OLUnicodeRequest olUnicodeRequest = new OLUnicodeRequest(unicodeList);

//        ------------------------------------------------MERIT SELECTION------------------------------------------------
        selectionService.meritSelection(sortedStudents, applications, meritCourseIntake, aptitudeTestResultRequest, olUnicodeRequest);
        System.out.println("Merit selection completed");
//        Get district quota intake amount for each course
        Map<String, Integer> districtCourseIntake = selectionService.getDistrictIntake(courseIntakeRequest.getCourseIntake());

        Map<String, List<String>> districtList = new HashMap<>();
        List<String> d1 = new ArrayList<>();
        d1.add("8888888");
        List<String> d2 = new ArrayList<>();
        d2.add("2222222");
        List<String> d3 = new ArrayList<>();
        d3.add("3333333");
        d3.add("0000000");
        List<String> d4 = new ArrayList<>();
        d4.add("4444444");
        List<String> d5 = new ArrayList<>();
        d5.add("6666666");
        d5.add("9999999");
        d5.add("7777777");
        districtList.put("Hambantota", d1);
        districtList.put("d2", d2);
        districtList.put("d3", d3);
        districtList.put("d4", d4);
        districtList.put("Mannar", d5);


//        Map students to districts
        DistrictRequest districtRequest = new DistrictRequest(districtList);

//        ------------------------------------------------DISTRICT QUOTA SELECTION------------------------------------------------
        selectionService.districtSelection(sortedStudents, applications, districtCourseIntake, aptitudeTestResultRequest, olUnicodeRequest, districtRequest);
        System.out.println("District selection completed");
//        Get ED quota intake amount for each course
        Map<String, Integer> edCourseIntake = selectionService.getEDIntake(courseIntakeRequest.getCourseIntake());

//        ------------------------------------------------EDUCATIONALLY DISADVANTAGED SELECTION------------------------------------------------
        selectionService.edSelection(sortedStudents, applications, edCourseIntake, aptitudeTestResultRequest, olUnicodeRequest, districtRequest);
        System.out.println("ED selection completed");
    }
}
