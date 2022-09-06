package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.*;
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

    public Map<String, Integer> getMeritIntake(Map<String, Integer> courseIntake) {
        Map<String, Integer> meritCourseIntake = new HashMap<>();
        for(String course : courseIntake.keySet()){
            meritCourseIntake.put(course, Math.toIntExact(Math.round(courseIntake.get(course) * 0.4)));
        }
        return meritCourseIntake;
    }

    public void meritSelection(List<String> sortedStudents, ApplicationRequest applications, Map<String, Integer> meritCourseIntake) {
        //Map to store the status of each student
        Map<String, Boolean> freeStudents = new HashMap<>();
        //Initialize all students as free
        for (String student: sortedStudents){
            freeStudents.put(student, true);
        }
        //Iterate through each course
        for(String course : meritCourseIntake.keySet()){
            Integer intake = meritCourseIntake.get(course);
            //Match scenario to stable marriage problem
            stableMarriage(course, intake, applications, sortedStudents, freeStudents, meritCourseIntake);
        }
    }

    private void stableMarriage(String course, Integer intake, ApplicationRequest applications, List<String> sortedStudents, Map<String, Boolean> freeStudents, Map<String, Integer> meritCourseIntake) {
        // Output which stores our selections
        Map<String, String> selectedCourse = new HashMap<>();
        List<String> applicants = null;
        while (intake > 0){
            //Filter out the students who applied for the course
            for (String application : applications.getApplications().keySet()){
                if(applications.getApplications().get(application).contains(course)){
                    applicants.add(application);
                }
            }
            //Sort the applicants of each course according to the zscore
            Collections.sort(applicants, Comparator.comparing(student->sortedStudents.indexOf(student)));

            //Loop through each applicant of the course
            for (String student : applicants){
                // If the student is free, select the student for this course. The course can be changed later.
                if(freeStudents.get(student)){
                    selectedCourse.put(student, course);
                    //Mark student as selected for a course
                    freeStudents.put(student, false);
                    // Decrease the course intake amount
                    intake--;
                }

                //If the student is not free
                else{
                    String alreadySelectedCourse = selectedCourse.get(student);
                    //If the student prefers course over already selected course, then select the student for the new course
                    if(!studentPrefersAlreadySelectedCourseOverCourse(student, course, alreadySelectedCourse, applications)){
                        selectedCourse.put(student, course);
                        //Increase the intake of already selected course
                        //We need to insert new pair into the last place
                        meritCourseIntake.remove(alreadySelectedCourse);
                        meritCourseIntake.put(alreadySelectedCourse, meritCourseIntake.get(alreadySelectedCourse)+1);
                        // Decrease the course intake amount
                        intake--;
                    }
                }
            }
        }
    }

    private boolean studentPrefersAlreadySelectedCourseOverCourse(String student, String course, String alreadySelectedCourse, ApplicationRequest applications) {
        List<String> unicodeList = applications.getApplications().get(student);
        for (String unicode : unicodeList){
            //If already selected course comes first, return true
            if(unicode == alreadySelectedCourse){
                return true;
            }
            //If new course comes first, return false
            if(unicode == course){
                return false;
            }
        }
        return false;
    }
}
