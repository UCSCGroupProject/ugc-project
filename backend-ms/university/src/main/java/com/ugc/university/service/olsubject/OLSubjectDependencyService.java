package com.ugc.university.service.olsubject;

import com.ugc.university.model.alsubject.ALSubjectDependency;
import com.ugc.university.model.alsubject.Alsubject;
import com.ugc.university.model.course.Course;
import com.ugc.university.model.olsubject.OLSubjectDependency;
import com.ugc.university.model.olsubject.Olsubject;
import com.ugc.university.payload.request.olsubject.Req_OLSubjectsWithResults;
import com.ugc.university.repository.course.CourseRepository;
import com.ugc.university.repository.olsubject.OLSubjectDependencyRepository;
import com.ugc.university.repository.olsubject.OLSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class OLSubjectDependencyService {
    @Autowired
    private OLSubjectDependencyRepository olSubjectDependencyRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private OLSubjectRepository olSubjectRepository;


    public Course getCourseByCode(String code) {
        return courseRepository.findByCode(code);
    }

    public Olsubject getOLSubjectByName(String name){
        return olSubjectRepository.findOlsubjectByName(name);
    }

    public void initOLSubjectDependencies() {
        // Quantity surveying
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("011"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("011"), this.getOLSubjectByName("Mathematics"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("011"), this.getOLSubjectByName("Science"), "S"));
        // Arts(SP) - Mass media
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("020"), this.getOLSubjectByName("English"), "S"));
        // Arts(SP) - Performing arts
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("041"), this.getOLSubjectByName("English"), "S"));
        // Architecture
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("023"), this.getOLSubjectByName("English"), "S"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("023"), this.getOLSubjectByName("Mathematics"), "C"));
        // Design
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("024"), this.getOLSubjectByName("English"), "S"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("024"), this.getOLSubjectByName("Mathematics"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("024"), this.getOLSubjectByName("Science"), "C"));
        // Law
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("025"), this.getOLSubjectByName("English"), "C"));
        // Communication studies
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("029"), this.getOLSubjectByName("English"), "C"));
        // Town & country planning
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("030"), this.getOLSubjectByName("English"), "B"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("030"), this.getOLSubjectByName("Mathematics"), "C"));
        // Fashion design & product development
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("034"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("034"), this.getOLSubjectByName("Mathematics"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("034"), this.getOLSubjectByName("Science"), "C"));
        // Nursing
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("037"), this.getOLSubjectByName("English"), "S"));
        // Information and Communication technology (ICT)
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("038"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("038"), this.getOLSubjectByName("Mathematics"), "C"));
        // Pharmacy
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("051"), this.getOLSubjectByName("English"), "S"));
        // Medical laboratory sciences
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("052"), this.getOLSubjectByName("English"), "S"));
        // Radiography
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("053"), this.getOLSubjectByName("English"), "S"));
        // Physiotherapy
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("054"), this.getOLSubjectByName("English"), "S"));
        // Facilities Management
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("056"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("056"), this.getOLSubjectByName("Mathematics"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("056"), this.getOLSubjectByName("Science"), "C"));
        // Computing & information systems
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("080"), this.getOLSubjectByName("English"), "C"));
        // Information technology & management
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("091"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("091"), this.getOLSubjectByName("Mathematics"), "C"));
        // Green technology
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("095"), this.getOLSubjectByName("English"), "C"));
        // Information systems
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("096"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("096"), this.getOLSubjectByName("Mathematics"), "C"));
        // Landscape architecture
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("097"), this.getOLSubjectByName("English"), "S"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("097"), this.getOLSubjectByName("Mathematics"), "C"));
        // Food business management
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("107"), this.getOLSubjectByName("English"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("107"), this.getOLSubjectByName("Mathematics"), "C"));
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("107"), this.getOLSubjectByName("Science"), "C"));
        // Business science
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("109"), this.getOLSubjectByName("Mathematics"), "C"));
        // Arts - Information technology
        olSubjectDependencyRepository.save(new OLSubjectDependency(this.getCourseByCode("128"), this.getOLSubjectByName("Mathematics"), "C"));
    }

    public Boolean performDependencyCheckWithResults(Req_OLSubjectsWithResults req_olSubjectsWithResults) {
        Course course = courseRepository.findByCode(req_olSubjectsWithResults.getCourseCode());

        if(course == null) { System.out.println("Course not exists"); return false; }

        List<OLSubjectDependency> olSubjectDependencies = olSubjectDependencyRepository.findOLSubjectDependenciesByCourse(course);

        if(olSubjectDependencies == null){ System.out.println("No OL subject dependencies"); return true; }

        for (OLSubjectDependency item: olSubjectDependencies){
            System.out.println(item.getOlsubject().getName());
            if(item.getOlsubject() == olSubjectRepository.findOlsubjectByName("English")){
                // English validity available, THEN check results
                // Results checking
                if(!gradeChecking(item.getMinGrade(), req_olSubjectsWithResults.getEnglishResult())) {
                    return false;
                }
            }else
            if(item.getOlsubject() == olSubjectRepository.findOlsubjectByName("Mathematics")){
                // Mathematics validity available, THEN check results
                // Results checking
                if(!gradeChecking(item.getMinGrade(), req_olSubjectsWithResults.getMathematicsResult())) {
                    return false;
                }
            }else
            if(item.getOlsubject() == olSubjectRepository.findOlsubjectByName("Science")){
                // Science validity available, THEN check results
                // Results checking
                if(!gradeChecking(item.getMinGrade(), req_olSubjectsWithResults.getScienceResult())) {
                    return false;
                }
            }else {
                System.out.println("Undefined subject");
                return false;
            }
        }

        return true;
    }

    public static int findIndex(String arr[], String item){
        int index = Arrays.binarySearch(arr, item);
        return (index < 0) ? -1 : index;
    }

    public Boolean gradeChecking(String minGradeRequired, String currentGrade){
        String[] grades = {"A", "B", "C", "S", "W"};

        System.out.println(findIndex(grades, minGradeRequired) + " - " + findIndex(grades, currentGrade));

        if(findIndex(grades, minGradeRequired) >= findIndex(grades, currentGrade)) {
            return true;
        }
        else {
            return false;
        }
    }
}
