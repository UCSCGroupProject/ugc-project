package com.ugc.selections.Service;

import com.ugc.selections.Entity.Student;
import com.ugc.selections.Payload.Request.*;
import com.ugc.selections.Payload.Response.PayloadResponse;
import com.ugc.selections.Payload.Response.ResType;
import com.ugc.selections.Repository.SelectionRepository;
import org.javatuples.Pair;
import org.javatuples.Triplet;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Transactional
@Service
public class SelectionService {

    private  final RestTemplate restTemplate;
    private final SelectionRepository selectionRepository;

    public SelectionService(RestTemplate restTemplate, SelectionRepository selectionRepository) {
        this.restTemplate = restTemplate;
        this.selectionRepository = selectionRepository;
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

    public void meritSelection(List<String> sortedStudents, ApplicationRequest applications, Map<String, Integer> meritCourseIntake, AptitudeTestResultRequest aptitudeTestResults, OLUnicodeRequest olUnicodeRequest) {
        //Map to store the status of each student
        Map<String, Boolean> freeStudents = new HashMap<>();
        // Output which stores our selections
        Map<String, String> selectedCourse = new HashMap<>();
        //Initialize all students as free
        for (String student: sortedStudents){
            freeStudents.put(student, true);
        }
        //Iterate through each course
        for(String course : meritCourseIntake.keySet()){
            Integer intake = meritCourseIntake.get(course);
            System.out.println(intake);
            //Match scenario to stable marriage problem
            stableMarriage(course, intake, applications, sortedStudents, freeStudents, meritCourseIntake, aptitudeTestResults, olUnicodeRequest, selectedCourse);
        }

    }


    public void stableMarriage(String course, Integer intake, ApplicationRequest applications, List<String> sortedStudents, Map<String, Boolean> freeStudents, Map<String, Integer> meritCourseIntake, AptitudeTestResultRequest aptitudeTestResults, OLUnicodeRequest olUnicodeRequest, Map<String, String> selectedCourse) {

        List<String> applicants = new ArrayList<>();
        while (intake > 0){
            System.out.println("x");
            //Filter out the students who applied for the course
            for (String application : applications.getApplications().keySet()){
                if(applications.getApplications().get(application).contains(course) && sortedStudents.contains(application)){
                    System.out.printf("%s applied for %s", application , course);
                    applicants.add(application);
                }
            }
            //Sort the applicants of each course according to the zscore
            Collections.sort(applicants, Comparator.comparing(student->sortedStudents.indexOf(student)));

            //Loop through each applicant of the course
            for (String student : applicants){
                //Check if student has minimum requirements to be selected for this course
                if(!eligibleForCourse(course, student, aptitudeTestResults, olUnicodeRequest)){
                    continue;
                }


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
                        Integer currentIntake = meritCourseIntake.get(alreadySelectedCourse);
                        meritCourseIntake.put(alreadySelectedCourse, currentIntake+1);
                        // Decrease the course intake amount
                        intake--;
                    }
                }
            }
            break;
        }
//        Store in database
        for(Map.Entry<String, String> entry: selectedCourse.entrySet()){
            Student student = new Student(
                    entry.getKey(),
                    entry.getValue()
            );
            if(selectionRepository.findByIndexNumber(entry.getKey()) != null){
//                System.out.println(entry.getKey());
                Integer deletedRecords = selectionRepository.deleteByIndexNumber(entry.getKey());
            }
            selectionRepository.save(student);
        }
    }

    public boolean eligibleForCourse(String course, String student, AptitudeTestResultRequest aptitudeTestResults, OLUnicodeRequest olUnicodeRequest) {
        //Check if the course has an aptitude test
        if(aptitudeTestResults.getTestResults().keySet().contains(course)){
            List<String> passedStudents = aptitudeTestResults.getTestResults().get(course);
            //Check if student passed the test
            if(passedStudents.contains(student)){
                //Check if the course has OL requirements
                return eligibleForCourseByOLResults(course, student, olUnicodeRequest);
            }
            //Student failed aptitude test. Mark as not eligible.
            else{
                return false;
            }
        }
        //Course doesn't have an aptitude test. Check only for OL requirements
        else{
            return eligibleForCourseByOLResults(course, student, olUnicodeRequest);
        }
    }

    public boolean eligibleForCourseByOLResults(String course, String student, OLUnicodeRequest olUnicodeRequest) {
        for (Triplet<String, String, String> requirements : olUnicodeRequest.getUnicodeList()){
            if(requirements.getValue0() == course){
                //Course has OL requirements
                //Check OL results
//                OLResultRequest olResultRequest = restTemplate.getForObject("http://localhost:8083/api/staff/olresults/getOLResult/" + student + "/" + requirements.getValue1(), OLResultRequest.class);
                OLResultRequest olResultRequest = new OLResultRequest("A");
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
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        return true;
    }

    public boolean studentPrefersAlreadySelectedCourseOverCourse(String student, String course, String alreadySelectedCourse, ApplicationRequest applications) {
        List<String> unicodeList = applications.getApplications().get(student);
        for (String unicode : unicodeList){
            //If already selected course comes first, return true
            if(unicode.equals(alreadySelectedCourse)){
                return true;
            }
            //If new course comes first, return false
            if(unicode.equals(course)){
                return false;
            }
        }
        return false;
    }

    public Map<String, Integer> getDistrictIntake(Map<String, Integer> courseIntake) {
        Map<String, Integer> districtCourseIntake = new HashMap<>();
        for(String course : courseIntake.keySet()){
            districtCourseIntake.put(course, Math.toIntExact(Math.round(courseIntake.get(course) * 0.55)));
        }
        return districtCourseIntake;
    }

    public void districtSelection(List<String> sortedStudents, ApplicationRequest applications, Map<String, Integer> districtCourseIntake, AptitudeTestResultRequest aptitudeTestResults, OLUnicodeRequest olUnicodeRequest, DistrictRequest districtRequest) {
//        Loop through each district
        for(Map.Entry<String, List<String>> districts: districtRequest.getDistrictsOfStudents().entrySet()){
//            Calculate district quota ratio
            Double districtQuotaRatio = Double.valueOf(districts.getValue().size() / applications.getApplications().keySet().size());
//            Map to store the status of each student after merit selection
            Map<String, Boolean> freeStudents = new HashMap<>();
//            Output which stores our selections
            Map<String, String> selectedCourse = new HashMap<>();
//            Find free students
            List<Student> students = selectionRepository.findAll();
            for(Student student : students){
                if(student.getSelectedCourse() == null){
                    freeStudents.put(student.getIndexNumber(), true);
                }
                else{
                    freeStudents.put(student.getIndexNumber(), false);
                }
            }
            //Iterate through each course
            for(String course : districtCourseIntake.keySet()){
                Integer intake = (int)Math.round(districtCourseIntake.get(course) * districtQuotaRatio);
                //Match scenario to stable marriage problem
                stableMarriage(course, intake, applications, sortedStudents, freeStudents, districtCourseIntake, aptitudeTestResults, olUnicodeRequest, selectedCourse);
            }
        }
    }

    public Map<String, Integer> getEDIntake(Map<String, Integer> courseIntake) {
        Map<String, Integer> edCourseIntake = new HashMap<>();
        for(String course : courseIntake.keySet()){
            edCourseIntake.put(course, Math.toIntExact(Math.round(courseIntake.get(course) * 0.05)));
        }
        return edCourseIntake;
    }

    public void edSelection(List<String> sortedStudents, ApplicationRequest applications, Map<String, Integer> edCourseIntake, AptitudeTestResultRequest aptitudeTestResults, OLUnicodeRequest olUnicodeRequest, DistrictRequest districtRequest) {
        List<String> EDDistricts = new ArrayList<>();
        EDDistricts.add("Nuwara Eliya");
        EDDistricts.add("Hambantota");
        EDDistricts.add("Jaffna");
        EDDistricts.add("Kilinochchi");
        EDDistricts.add("Mannar");
        EDDistricts.add("Mullaitivu");
        EDDistricts.add("Vavuniya");
        EDDistricts.add("Trincomalee");
        EDDistricts.add("Batticaloa");
        EDDistricts.add("Ampara");
        EDDistricts.add("Puttalam");
        EDDistricts.add("Anuradhapura");
        EDDistricts.add("Polonnaruwa");
        EDDistricts.add("Badulla");
        EDDistricts.add("Monaragala");
        EDDistricts.add("Ratnapura");

//        Loop through ED districts
        for(Map.Entry<String, List<String>> districts: districtRequest.getDistrictsOfStudents().entrySet()){
            if(EDDistricts.contains(districts.getKey())){
//                Calculate district quota ratio
                Double districtQuotaRatio = Double.valueOf(districts.getValue().size() / applications.getApplications().keySet().size());
//                Map to store the status of each student after merit selection
                Map<String, Boolean> freeStudents = new HashMap<>();
//                Output which stores our selections
                Map<String, String> selectedCourse = new HashMap<>();
//                Find free students
                List<Student> students = selectionRepository.findAll();
                for(Student student : students){
                    if(student.getSelectedCourse() == null){
                        freeStudents.put(student.getIndexNumber(), true);
                    }
                    else{
                        freeStudents.put(student.getIndexNumber(), false);
                    }
                }
//                Iterate through each course
                for(String course : edCourseIntake.keySet()){
                    Integer intake = (int)Math.round(edCourseIntake.get(course) * districtQuotaRatio);
//                Match scenario to stable marriage problem
                    stableMarriage(course, intake, applications, sortedStudents, freeStudents, edCourseIntake, aptitudeTestResults, olUnicodeRequest, selectedCourse);
                }
            }
        }
    }

    public ResponseEntity<?> getSelectedStudents() {
        List<Student> selectedStudents = selectionRepository.findAll();
        if(selectedStudents.isEmpty()){
            return ResponseEntity.ok(new PayloadResponse(null, "Selection not done", ResType.BAD));
        }
        else{
            List<Triplet<Student, String, String>> selections = new ArrayList<>();
            for (Student student: selectedStudents) {
                Map<String, String> courseAndUniversity = restTemplate.getForObject("http://localhost:8082/api/university/unicode/getCourseAndUniversity?unicodeId="+student.getSelectedCourse(), Map.class);
                Triplet<Student, String, String> newTriplet = new Triplet<>(student, courseAndUniversity.get("course"), courseAndUniversity.get("university"));
                selections.add(newTriplet);
            }
            return ResponseEntity.ok(new PayloadResponse(selections, "Selection process completed", ResType.OK));
        }
    }
}
