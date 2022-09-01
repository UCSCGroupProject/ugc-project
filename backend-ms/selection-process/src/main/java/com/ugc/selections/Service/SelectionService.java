package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.*;
import org.javatuples.Triplet;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SelectionService {

    private  final RestTemplate restTemplate;

    public SelectionService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<String> getEligible(ApplicantRequest applicants, ALPassedRequest alResultRequest) {

        //Get the intersection of the two lists
        List<String> eligibleIndexList = applicants
                .getIndexNumbers()
                .stream().filter(e -> alResultRequest.getIndexNumbers().contains(e))
                .collect(Collectors.toList());
        return eligibleIndexList;
    }

    public List<String> sortZScore(List<String> listOfStudents, ZScoreRequest zScoreRequest) {
        Map<String, Double> eligibleZScores =  zScoreRequest.getZscores()
                .entrySet()
                .stream()
                .filter(map->listOfStudents.contains(map.getKey()))
                .collect(Collectors.toMap(map->map.getKey(), map->map.getValue()));

        LinkedHashMap<String, Double> reverseSortedMap = new LinkedHashMap<>();
         eligibleZScores
                .entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .forEachOrdered(x -> reverseSortedMap.put(x.getKey(), x.getValue()));

        return reverseSortedMap.keySet().stream().toList();
    }

    public void meritSelection(List<String> meritStudents, ApplicationRequest meritApplications, AptitudeTestResultRequest meritAptitudeTestResults, CourseIntakeRequest courseIntakeRequest, OLUnicodeRequest olUnicodeRequest) {
        boolean selected = false;
        for (String student : meritStudents) {
            List<String> unicodeList = meritApplications
                    .getApplications()
                    .get(student);
            for (String unicode: unicodeList){
                //Check if the course has an aptitude test
                if(meritAptitudeTestResults.getTestResults().keySet().contains(unicode)){
                    List<String> passedStudents = meritAptitudeTestResults.getTestResults().get(unicode);
                    //Check if student passed the test
                    if(passedStudents.contains(student)){
                        //Check if the course has OL requirements
                        selected = isSelected(courseIntakeRequest, olUnicodeRequest, selected, student, unicode);
                        if(selected){
                            break;
                        }
                    }
                }
                else{
                    // Course does not have an aptitude test
                    // In this case, check only the OL Result and intake amount
                    //Check if the course has OL requirements
                    selected = isSelected(courseIntakeRequest, olUnicodeRequest, selected, student, unicode);
                    if(selected){
                        break;
                    }
                }
            }
            if(!selected){
                System.out.println(student + " was not selected for any course");
            }
        }
    }

    private boolean isSelected(CourseIntakeRequest courseIntakeRequest, OLUnicodeRequest olUnicodeRequest, boolean selected, String student, String unicode) {
        //Flag to check whether unicode has OL requirements
        boolean flag = false;
        for (Triplet<String, String, String> requirements : olUnicodeRequest.getUnicodeList()){
            if(requirements.getValue0() == unicode){
                flag = true;
                //Check OL results
                OLResultRequest olResultRequest = restTemplate.getForObject("http://localhost:8083/staff/getOLResult" + student + "/" + requirements.getValue1(), OLResultRequest.class);

                int req = 0;
                int res = 0;
                if(requirements.getValue2() == "A"){
                     req = 5;
                }
                else if(requirements.getValue2() == "B"){
                     req = 4;
                }
                else if(requirements.getValue2() == "C"){
                     req = 3;
                }
                else if(requirements.getValue2() == "S"){
                     req = 2;
                }

                if(olResultRequest.getResult() == "A"){
                     res = 5;
                }
                if(olResultRequest.getResult() == "B"){
                     res = 4;
                }
                if(olResultRequest.getResult() == "C"){
                     res = 3;
                }
                if(olResultRequest.getResult() == "S"){
                     res = 2;
                }
                if(olResultRequest.getResult() == "W"){
                     res = 1;
                }

                if(res >= req){
                    //Student has min OL requirement
                    //Check if the course intake amount exceeded
                    if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                        System.out.println(student + " is selected for " + unicode);
                        selected = true;
                        courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode)-1 );
                        break;
                    }
                }
            }
        }
        //Unicode doesn't have OL requirements.
        //In this case, check only the intake amount
        if(!flag){
            if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                System.out.println(student + " is selected for " + unicode);
                selected = true;
                courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode)-1 );
            }
        }
        return selected;
    }

    public void districtQuotaSelection(DistrictRequest districtRequest, ApplicationRequest applications, AptitudeTestResultRequest aptitudeTestResults, CourseIntakeRequest courseIntakeRequest, OLUnicodeRequest olUnicodeRequest) {
        boolean selected = false;
        boolean flag = false;
        //Loop through each district
        for(String district: districtRequest.getDistrictsOfStudents().keySet()){
            //Calculate district quota value
            Integer districtQuota = Math.toIntExact(Math.round(districtRequest.getDistrictsOfStudents().get(district).size()/applications.getApplications().keySet().size()));
            //Loop through students of each district
            for (String student : districtRequest.getDistrictsOfStudents().get(district)) {
                List<String> unicodeList = applications
                        .getApplications()
                        .get(student);
                for (String unicode: unicodeList){
                    //Check if the course has an aptitude test
                    if(aptitudeTestResults.getTestResults().keySet().contains(unicode)){
                        List<String> passedStudents = aptitudeTestResults.getTestResults().get(unicode);
                        //Check if student passed the test
                        if(passedStudents.contains(student)){
                            //Check if the course has OL requirements
                            for (Triplet<String, String, String> requirements : olUnicodeRequest.getUnicodeList()){
                                if(requirements.getValue0() == unicode){
                                    flag = true;
                                    //Check OL results
                                    OLResultRequest olResultRequest = restTemplate.getForObject("http://localhost:8083/staff/getOLResult" + student + "/" + requirements.getValue1(), OLResultRequest.class);

                                    int req = 0;
                                    int res = 0;
                                    if(requirements.getValue2() == "A"){
                                        req = 5;
                                    }
                                    else if(requirements.getValue2() == "B"){
                                        req = 4;
                                    }
                                    else if(requirements.getValue2() == "C"){
                                        req = 3;
                                    }
                                    else if(requirements.getValue2() == "S"){
                                        req = 2;
                                    }

                                    if(olResultRequest.getResult() == "A"){
                                        res = 5;
                                    }
                                    if(olResultRequest.getResult() == "B"){
                                        res = 4;
                                    }
                                    if(olResultRequest.getResult() == "C"){
                                        res = 3;
                                    }
                                    if(olResultRequest.getResult() == "S"){
                                        res = 2;
                                    }
                                    if(olResultRequest.getResult() == "W"){
                                        res = 1;
                                    }

                                    if(res >= req){
                                        //Student has min OL requirement
                                        //Check if the course intake amount exceeded
                                        if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                                            if(districtQuota != 0){
                                                selected = true;
                                                System.out.println(student + " is selected for " + unicode);
                                                courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode)-1 );
                                                districtQuota--;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            if(!flag){
                                if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                                    if(districtQuota !=0) {
                                        selected = true;
                                        System.out.println(student + " is selected for " + unicode);
                                        courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode) - 1);
                                        districtQuota--;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else{
                        // Course does not have an aptitude test
                        // In this case, check only the OL Result and intake amount
                        //Check if the course has OL requirements
                        for (Triplet<String, String, String> requirements : olUnicodeRequest.getUnicodeList()){
                            if(requirements.getValue0() == unicode){
                                flag = true;
                                //Check OL results
                                OLResultRequest olResultRequest = restTemplate.getForObject("http://localhost:8083/staff/getOLResult" + student + "/" + requirements.getValue1(), OLResultRequest.class);

                                int req = 0;
                                int res = 0;
                                if(requirements.getValue2() == "A"){
                                    req = 5;
                                }
                                else if(requirements.getValue2() == "B"){
                                    req = 4;
                                }
                                else if(requirements.getValue2() == "C"){
                                    req = 3;
                                }
                                else if(requirements.getValue2() == "S"){
                                    req = 2;
                                }

                                if(olResultRequest.getResult() == "A"){
                                    res = 5;
                                }
                                if(olResultRequest.getResult() == "B"){
                                    res = 4;
                                }
                                if(olResultRequest.getResult() == "C"){
                                    res = 3;
                                }
                                if(olResultRequest.getResult() == "S"){
                                    res = 2;
                                }
                                if(olResultRequest.getResult() == "W"){
                                    res = 1;
                                }

                                if(res >= req){
                                    //Student has min OL requirement
                                    //Check if the course intake amount exceeded
                                    if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                                        if(districtQuota !=0){
                                            selected = true;
                                            System.out.println(student + " is selected for " + unicode);
                                            courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode)-1 );
                                            districtQuota--;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if(!flag){
                            if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                                if(districtQuota !=0) {
                                    selected = true;
                                    System.out.println(student + " is selected for " + unicode);
                                    courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode) - 1);
                                    districtQuota--;
                                    break;
                                }
                            }
                        }
                    }
                }
                if(!selected){
                    System.out.println(student + " was not selected for any course");
                }
            }
        }

    }
}
