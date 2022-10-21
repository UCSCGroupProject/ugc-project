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
        courseIntake.put("001A", 186);
        courseIntake.put("001B", 178);
        courseIntake.put("001C", 160);
        courseIntake.put("001D", 130);
        courseIntake.put("001E", 152);
        courseIntake.put("001F", 149);
        courseIntake.put("001G", 102);
        courseIntake.put("001H", 114);
        courseIntake.put("001K", 118);
        courseIntake.put("001L", 120);
        courseIntake.put("001M", 105);
        courseIntake.put("002B", 78);
        courseIntake.put("002C", 74);
        courseIntake.put("003B", 130);
        courseIntake.put("004E", 185);
        courseIntake.put("004H", 182);
        courseIntake.put("004K", 172);
        courseIntake.put("004L", 160);
        courseIntake.put("004M", 155);
        courseIntake.put("005M", 164);
        courseIntake.put("006A", 210);
        courseIntake.put("006B", 212);
        courseIntake.put("006C", 198);
        courseIntake.put("006D", 200);
        courseIntake.put("006E", 189);
        courseIntake.put("006F", 180);
        courseIntake.put("006H", 185);
        courseIntake.put("006J", 188);
        courseIntake.put("007K", 140);
        courseIntake.put("007L", 133);
        courseIntake.put("007R", 128);
        courseIntake.put("008B", 380);
        courseIntake.put("008C", 375);
        courseIntake.put("008E", 355);
        courseIntake.put("008F", 356);
        courseIntake.put("008G", 345);
        courseIntake.put("008J", 326);
        courseIntake.put("009G", 80);
        courseIntake.put("010G", 98);
        courseIntake.put("011G", 85);
        courseIntake.put("012D", 132);
        courseIntake.put("012E", 129);
        courseIntake.put("012F", 125);
        courseIntake.put("012T", 128);
        courseIntake.put("012W", 127);
        courseIntake.put("013A", 268);
        courseIntake.put("013B", 263);
        courseIntake.put("013C", 259);
        courseIntake.put("013D", 260);
        courseIntake.put("013E", 235);
        courseIntake.put("013F", 153);
        courseIntake.put("013H", 239);
        courseIntake.put("013J", 245);
        courseIntake.put("014L", 143);
        courseIntake.put("015K", 189);
        courseIntake.put("015L", 163);
        courseIntake.put("015M", 153);
        courseIntake.put("015R", 170);
        courseIntake.put("015W", 120);
        courseIntake.put("016A", 490);
        courseIntake.put("016B", 486);
        courseIntake.put("016C", 481);
        courseIntake.put("016D", 472);
        courseIntake.put("016E", 465);
        courseIntake.put("016F", 448);
        courseIntake.put("016H", 445);
        courseIntake.put("016J", 436);
        courseIntake.put("016K", 420);
        courseIntake.put("016L", 428);
        courseIntake.put("016M", 425);
        courseIntake.put("017C", 88);
        courseIntake.put("018C", 190);
        courseIntake.put("018D", 188);
        courseIntake.put("018E", 182);
        courseIntake.put("018H", 175);
        courseIntake.put("018J", 178);
        courseIntake.put("019A", 812);
        courseIntake.put("019B", 795);
        courseIntake.put("019C", 750);
        courseIntake.put("019D", 698);
        courseIntake.put("019E", 720);
        courseIntake.put("019F", 678);
        courseIntake.put("019H", 770);
        courseIntake.put("019J", 745);
        courseIntake.put("019K", 786);
        courseIntake.put("020S", 110);
        courseIntake.put("041S", 110);
        courseIntake.put("021L", 309);
        courseIntake.put("022W", 274);
        courseIntake.put("022R", 184 );
        courseIntake.put("023G", 100);
        courseIntake.put("024G", 87);
        courseIntake.put("025A", 180);
        courseIntake.put("025B", 172);
        courseIntake.put("025E", 150);
        courseIntake.put("026G", 251);
        courseIntake.put("027D", 119);
        courseIntake.put("028C", 114);
        courseIntake.put("029W", 200);
        courseIntake.put("030G", 88);
        courseIntake.put("031D", 36);
        courseIntake.put("032N", 215);
        courseIntake.put("032P", 168);
        courseIntake.put("033N", 89);
        courseIntake.put("034G", 79);
        courseIntake.put("035B", 101);
        courseIntake.put("035C", 65);
        courseIntake.put("035L", 62);
        courseIntake.put("036E", 140);
        courseIntake.put("036W", 107);
        courseIntake.put("037A", 105);
        courseIntake.put("037B", 103);
        courseIntake.put("037C", 93);
        courseIntake.put("037E", 88);
        courseIntake.put("037F", 85);
        courseIntake.put("037H", 82);
        courseIntake.put("038K", 150);
        courseIntake.put("038R", 132);
        courseIntake.put("039B", 383);
        courseIntake.put("050K", 103);
        courseIntake.put("051B", 75);
        courseIntake.put("051C", 52);
        courseIntake.put("051E", 53);
        courseIntake.put("051F", 41);
        courseIntake.put("052B", 78);
        courseIntake.put("052C", 63);
        courseIntake.put("052E", 45);
        courseIntake.put("052F", 42);
        courseIntake.put("053B", 68);
        courseIntake.put("054A", 55);
        courseIntake.put("054B", 49);
        courseIntake.put("055D", 109);
        courseIntake.put("056G", 81);
        courseIntake.put("057G", 63);
        courseIntake.put("058A", 80);
        courseIntake.put("059A", 121);
        courseIntake.put("060B", 79);
        courseIntake.put("062F", 120);
        courseIntake.put("063J", 278);
        courseIntake.put("064U", 107);
        courseIntake.put("065U", 101);
        courseIntake.put("066U", 101);
        courseIntake.put("067U", 108);
        courseIntake.put("068X", 178);
        courseIntake.put("068Y", 122);
        courseIntake.put("069X", 145);
        courseIntake.put("069Y", 122);
        courseIntake.put("069Z", 100);
        courseIntake.put("070X", 62);
        courseIntake.put("071Y", 40);
        courseIntake.put("071Z", 34);
        courseIntake.put("072Y", 94);
        courseIntake.put("073U", 105);
        courseIntake.put("074U", 112);
        courseIntake.put("075U", 100);
        courseIntake.put("076U", 106);
        courseIntake.put("077C", 78);
        courseIntake.put("079J", 170);
        courseIntake.put("080L", 98);
        courseIntake.put("081E", 81);
        courseIntake.put("081L", 66);
        courseIntake.put("082C", 88);
        courseIntake.put("082D", 75);
        courseIntake.put("082L", 65);
        courseIntake.put("083D", 84);
        courseIntake.put("084J", 225);
        courseIntake.put("085Z", 120);

        CourseIntakeRequest courseIntakeRequest = new CourseIntakeRequest(courseIntake);

        List<String> indexApplicants= new ArrayList<>();
        indexApplicants.add("1945682131");
        indexApplicants.add("1945682135");
        indexApplicants.add("1945682139");
        indexApplicants.add("1945682143");
        indexApplicants.add("1945682147");
        indexApplicants.add("1945682151");
        indexApplicants.add("1945682155");
        indexApplicants.add("1945682159");
        indexApplicants.add("1945682163");
        indexApplicants.add("1945682167");
        indexApplicants.add("1945682171");
        indexApplicants.add("1945682175");
        indexApplicants.add("1945682179");
        indexApplicants.add("1945682183");
        indexApplicants.add("1945682187");
        indexApplicants.add("1945682191");
        indexApplicants.add("1945682195");
        indexApplicants.add("1945682199");
        indexApplicants.add("1945682203");
        indexApplicants.add("1945682207");
        indexApplicants.add("1945682211");
        indexApplicants.add("1945682215");
        indexApplicants.add("1945682219");
        indexApplicants.add("1945682223");
        indexApplicants.add("1945682227");
        indexApplicants.add("1945682231");
        indexApplicants.add("1945682235");
        indexApplicants.add("1945682239");
        indexApplicants.add("1945682243");
        indexApplicants.add("1945682247");
        indexApplicants.add("1923812131");
        indexApplicants.add("1923812135");
        indexApplicants.add("1923812139");
        indexApplicants.add("1923812143");
        indexApplicants.add("1923812147");
        indexApplicants.add("1923812151");
        indexApplicants.add("1923812155");
        indexApplicants.add("1923812159");
        indexApplicants.add("1923812163");
        indexApplicants.add("1923812167");
        indexApplicants.add("1923812171");
        indexApplicants.add("1923812175");
        indexApplicants.add("1923812179");
        indexApplicants.add("1923812183");
        indexApplicants.add("1923812187");
        indexApplicants.add("1923812191");
        indexApplicants.add("1923812195");
        indexApplicants.add("1923812199");
        indexApplicants.add("1923812203");
        indexApplicants.add("1923812207");
        indexApplicants.add("1923812211");
        indexApplicants.add("1923812215");
        indexApplicants.add("1923812219");
        indexApplicants.add("1923812223");
        indexApplicants.add("1923812227");
        indexApplicants.add("1923812231");
        indexApplicants.add("1923812235");
        indexApplicants.add("1923812239");
        indexApplicants.add("1923812243");
        indexApplicants.add("1923812247");
        ApplicantRequest applicants = new ApplicantRequest(indexApplicants);

        List<String> indexAL= new ArrayList<>();
        indexAL.add("1945682131");
        indexAL.add("1945682135");
//        indexAL.add("1945682139"); failed applicant
        indexAL.add("1945682143");
        indexAL.add("1945682147");
        indexAL.add("1945682151");
        indexAL.add("1945682155");
        indexAL.add("1945682159");
        indexAL.add("1945682163");
        indexAL.add("1945682167");
        indexAL.add("1945682171");
        indexAL.add("1945682175");
        indexAL.add("1945682179");
        indexAL.add("1945682183");
        indexAL.add("1945682187");
        indexAL.add("1945682191");
        indexAL.add("1945682195");
        indexAL.add("1945682199");
        indexAL.add("1945682203");
        indexAL.add("1945682207");
        indexAL.add("1945682211");
//        indexAL.add("1945682215");
        indexAL.add("1945682219");
        indexAL.add("1945682223");
        indexAL.add("1945682227");
        indexAL.add("1945682231");
        indexAL.add("1945682235");
        indexAL.add("1945682239");
        indexAL.add("1945682243");
        indexAL.add("1945682247");
        indexAL.add("1923812131");
        indexAL.add("1923812135");
        indexAL.add("1923812139");
        indexAL.add("1923812143");
        indexAL.add("1923812147");
        indexAL.add("1923812151");
        indexAL.add("1923812155");
        indexAL.add("1923812159");
        indexAL.add("1923812163");
        indexAL.add("1923812167");
        indexAL.add("1923812171");
        indexAL.add("1923812175");
        indexAL.add("1923812179");
        indexAL.add("1923812183");
        indexAL.add("1923812187");
        indexAL.add("1923812191");
//        indexAL.add("1923812195");
        indexAL.add("1923812199");
        indexAL.add("1923812203");
        indexAL.add("1923812207");
        indexAL.add("1923812211");
        indexAL.add("1923812215");
        indexAL.add("1923812219");
        indexAL.add("1923812223");
        indexAL.add("1923812227");
        indexAL.add("1923812231");
        indexAL.add("1923812235");
        indexAL.add("1923812239");
        indexAL.add("1923812243");
        indexAL.add("1923812247");
        ALPassedRequest alResultRequest = new ALPassedRequest(indexAL);;

//        Filter and get the students who are eligible by A/L Results
        List<String> eligibleStudents = selectionService.getEligible(applicants, alResultRequest);

        Map<String, Double> zScoreIndex = new HashMap<>();
//        zScoreIndex.put("1111111", 1.85);
//        zScoreIndex.put("2222222", 1.8);
//        zScoreIndex.put("3333333", 1.7);
//        zScoreIndex.put("4444444", 1.6);
//        zScoreIndex.put("5555555", 1.9);
//        zScoreIndex.put("6666666", 0.4);
//        zScoreIndex.put("7777777", 0.4);
//        zScoreIndex.put("8888888", 0.4);
//        zScoreIndex.put("9999999", 0.4);
//        zScoreIndex.put("0000000", 0.02);
        zScoreIndex.put("1945682131", 2.9658);
        zScoreIndex.put("1945682135", 0.9855);
        zScoreIndex.put("1945682139", -1.1231);
        zScoreIndex.put("1945682143", 1.8555);
        zScoreIndex.put("1945682147", 0.1248);
        zScoreIndex.put("1945682151", 2.8457);
        zScoreIndex.put("1945682155", 1.2375);
        zScoreIndex.put("1945682159", 1.7956);
        zScoreIndex.put("1945682163", 1.3254);
        zScoreIndex.put("1945682167", 1.5055);
        zScoreIndex.put("1945682171", 1.0235);
        zScoreIndex.put("1945682175", 1.6894);
        zScoreIndex.put("1945682179", 1.0103);
        zScoreIndex.put("1945682183", 0.0885);
        zScoreIndex.put("1945682187", 0.5125);
        zScoreIndex.put("1945682191", 1.5648);
        zScoreIndex.put("1945682195", 0.3231);
        zScoreIndex.put("1945682199", 1.4540);
        zScoreIndex.put("1945682203", 0.6848);
        zScoreIndex.put("1945682207", 2.7785);
        zScoreIndex.put("1945682211", 1.8402);
        zScoreIndex.put("1945682215", -1.2242);
        zScoreIndex.put("1945682219", 2.7511);
        zScoreIndex.put("1945682223", 1.2348);
        zScoreIndex.put("1945682227", 0.3539);
        zScoreIndex.put("1945682231", 0.0541);
        zScoreIndex.put("1945682235", 1.3249);
        zScoreIndex.put("1945682239", 1.2795);
        zScoreIndex.put("1945682243", 0.8582);
        zScoreIndex.put("1945682247", 1.1028);
        zScoreIndex.put("1923812131", 1.7246);
        zScoreIndex.put("1923812135", 1.6242);
        zScoreIndex.put("1923812139", 1.5203);
        zScoreIndex.put("1923812143", 1.1210);
        zScoreIndex.put("1923812147", 0.4236);
        zScoreIndex.put("1923812151", 1.8012);
        zScoreIndex.put("1923812155", 0.4448);
        zScoreIndex.put("1923812159", 1.6010);
        zScoreIndex.put("1923812163", 1.4445);
        zScoreIndex.put("1923812167", 0.1548);
        zScoreIndex.put("1923812171", 1.1003);
        zScoreIndex.put("1923812175", 0.7543);
        zScoreIndex.put("1923812179", 1.2332);
        zScoreIndex.put("1923812183", 0.7061);
        zScoreIndex.put("1923812187", 0.9002);
        zScoreIndex.put("1923812191", 2.3547);
        zScoreIndex.put("1923812195", -1.0210);
        zScoreIndex.put("1923812199", 0.5505);
        zScoreIndex.put("1923812203", 0.4501);
        zScoreIndex.put("1923812207", 2.1056);
        zScoreIndex.put("1923812211", 0.4628);
        zScoreIndex.put("1923812215", 0.3456);
        zScoreIndex.put("1923812219", 2.1032);
        zScoreIndex.put("1923812223", 0.7026);
        zScoreIndex.put("1923812227", 0.9067);
        zScoreIndex.put("1923812231", 1.4561);
        zScoreIndex.put("1923812235", 0.5959);
        zScoreIndex.put("1923812239", 0.8167);
        zScoreIndex.put("1923812243", 1.1121);
        zScoreIndex.put("1923812247", 0.4467);
        ZScoreRequest zScoreRequest = new ZScoreRequest(zScoreIndex);
        List<String> sortedStudents = selectionService.sortZScore(eligibleStudents, zScoreRequest);

//        Get merit intake amount for each course
        Map<String, Integer> meritCourseIntake = selectionService.getMeritIntake(courseIntakeRequest.getCourseIntake());

        List<String> unicodeList1 = new ArrayList<>();
        unicodeList1.add("002B");
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
        unicodeList5.add("002B");
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
        List<String> colombo = new ArrayList<>();
//        d1.add("8888888");
        List<String> gampaha = new ArrayList<>();
//        d2.add("2222222");
        List<String> kalutara = new ArrayList<>();
//        d3.add("3333333");
//        d3.add("0000000");
        List<String> matale = new ArrayList<>();
//        d4.add("4444444");
        List<String> kandy = new ArrayList<>();
//        d5.add("6666666");
//        d5.add("9999999");
//        d5.add("7777777");
        List<String> nuwaraeliya = new ArrayList<>();
        List<String> galle = new ArrayList<>();
        List<String> matara = new ArrayList<>();
        List<String> hambantota = new ArrayList<>();
        List<String> jaffna = new ArrayList<>();
        List<String> kilinochchi = new ArrayList<>();
        List<String> mannar = new ArrayList<>();
        List<String> mullaitivu = new ArrayList<>();
        List<String> vavuniya = new ArrayList<>();
        List<String> trincomalee = new ArrayList<>();
        List<String> batticaloa = new ArrayList<>();
        List<String> ampara = new ArrayList<>();
        List<String> puttalam = new ArrayList<>();
        List<String> kurunegala = new ArrayList<>();
        List<String> anuradhapura = new ArrayList<>();
        List<String> polonnaruwa = new ArrayList<>();
        List<String> badulla = new ArrayList<>();
        List<String> monaragala = new ArrayList<>();
        List<String> kegalle = new ArrayList<>();
        List<String> ratnapura = new ArrayList<>();
        districtList.put("Comlombo", colombo);
        districtList.put("Gampaha", gampaha);
        districtList.put("kalutara", kalutara);
        districtList.put("Matale", matale);
        districtList.put("Kandy", kandy);
        districtList.put("Nuwara Eliya", nuwaraeliya);
        districtList.put("Galle", galle );
        districtList.put("Matara", matara);
        districtList.put("Hambantota", hambantota);
        districtList.put("Jaffna", jaffna);
        districtList.put("Kilinochchi", kilinochchi);
        districtList.put("Mannar", mannar);
        districtList.put("Mullaitivu", mullaitivu);
        districtList.put("Vavuniya", vavuniya);
        districtList.put("Trincolamlee", trincomalee);
        districtList.put("Batticaloa", batticaloa);
        districtList.put("Ampara", ampara);
        districtList.put("Puttalam", puttalam);
        districtList.put("Kurunegala", kurunegala);
        districtList.put("Anuradhapura", anuradhapura);
        districtList.put("Polonnaruwa", polonnaruwa);
        districtList.put("Badulla", badulla);
        districtList.put("Monaragala", monaragala);
        districtList.put("Kegalle", kegalle);
        districtList.put("Ratnapura", ratnapura);


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

        return ResponseEntity.ok(new PayloadResponse(null, "Selection successful", ResType.OK));
    }

    @GetMapping(path = "/getSelected")
    public ResponseEntity<?> getSelectedStudents(){
        return selectionService.getSelectedStudents();
    }
}
