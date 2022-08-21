package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.*;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SelectionService {
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

    public void meritSelection(List<String> meritStudents, ApplicationRequest meritApplications, AptitudeTestResultRequest meritAptitudeTestResults, CourseIntakeRequest courseIntakeRequest) {
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
                        //Check if the course intake amount exceeded
                        if(courseIntakeRequest.getCourseIntake().get(unicode) != 0) {
                            System.out.println(student + " is selected for " + unicode);
                            selected = true;
                            courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode)-1 );
                            break;
                        }
                    }
                }
                else{
                    // Course does not have an aptitude test
                    // In this case, check only the intake amount
                    if(courseIntakeRequest.getCourseIntake().get(unicode) != 0){
                        System.out.println(student + " is selected for " + unicode);
                        selected = true;
                        courseIntakeRequest.getCourseIntake().put(unicode, courseIntakeRequest.getCourseIntake().get(unicode)-1 );
                        break;
                    }
                }
                if(!selected){
                    System.out.println(student + " was not selected for any course");
                }
            }
        }
    }
}
