package com.ugc.university.service.alsubject;

import com.ugc.university.model.alsubject.ALSubjectDependency;
import com.ugc.university.model.alsubject.Alsubject;
import com.ugc.university.model.course.Course;
import com.ugc.university.payload.request.alsubject.Req_ALSubjectsWithResults;
import com.ugc.university.payload.request.alsubject.Req_ChoosedALSubjects;
import com.ugc.university.repository.alsubject.ALSubjectDependencyRepository;
import com.ugc.university.repository.alsubject.ALSubjectRepository;
import com.ugc.university.repository.course.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ALSubjectDependencyService {
    @Autowired
    private ALSubjectDependencyRepository alSubjectDependencyRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ALSubjectRepository alSubjectRepository;

    public Course getCourseByCode(String code) {
        return courseRepository.findByCode(code);
    }

    public Alsubject getAlSubjectByName(String name){
        return alSubjectRepository.findAlsubjectByName(name);
    }

    public void initALSubjectDependencies() {
        this.initBiologicalScienceDependecies();
    }

    // Biological science stream related dependencies
    public void initBiologicalScienceDependecies() {
        // Medicine
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("001"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("001"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("001"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Dental
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("002"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("002"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("002"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Veterinary science
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("003"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("003"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("003"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Agricultural technology & management
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Mathematics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("039"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        // Agriculture
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Mathematics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("004"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        // Food science & nutrition
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Mathematics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("005"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        // Food science
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("035"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("035"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("035"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Ayurvedic medicine and surgery
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("032"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("032"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("032"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Unani medicine and surgery
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("033"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("033"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("033"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Siddha medicine and surgery
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("036"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("036"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("036"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Biological science
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("006"), this.getAlSubjectByName("Physics"), 3, "S"));
        // Applied science (Biologocal Science)
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("007"), this.getAlSubjectByName("Physics"), 3, "S"));
        // Health promotion
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("050"), this.getAlSubjectByName("Physics"), 3, "S"));
        // Nursing
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("037"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("037"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("037"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Pharmacy
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("051"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("051"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("051"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Medical laboratory sciences
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("052"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("052"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("052"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Radiography
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("053"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("053"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("053"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Physiotherapy
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("054"), this.getAlSubjectByName("Physics"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("054"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("054"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("054"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("054"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("054"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        // Biochemistry & molecular biology
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("058"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("058"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("058"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Fisheries & marine sciences
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("062"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("062"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("062"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Environmental conservation & management
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("055"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("055"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("055"), this.getAlSubjectByName("Physics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("055"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("055"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("055"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        // Animal science & fisheries
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("086"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("086"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("086"), this.getAlSubjectByName("Physics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("086"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        // Food production & technology management
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Mathematics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("087"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        // Agricultural resource management and technology
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Mathematics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("093"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        // Agribusiness management
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Physics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Food Technology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Bio-Resource Technology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("094"), this.getAlSubjectByName("Agro Technology"), 3, "S"));
        // Green technology
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Physics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Food Technology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Bio-Resource Technology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("095"), this.getAlSubjectByName("Agro Technology"), 3, "S"));
        // Animal science
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("067"), this.getAlSubjectByName("Physics"), 3, "S"));
        // Export agriculture
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("073"), this.getAlSubjectByName("Physics"), 3, "S"));
        // Aquatic resources technology
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("088"), this.getAlSubjectByName("Physics"), 3, "S"));
        // Occupational therapy
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("115"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("115"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("115"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Optometry
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("116"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("116"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("116"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Applied chemistry
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Combined Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Higher Mathematics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("118"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        // Indigenous medicinal resources
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Physics"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Biology"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Agricultural Science"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Chemistry"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Biology"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Agricultural Science"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Chemistry"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Physics"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Biology"), 3, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("120"), this.getAlSubjectByName("Agricultural Science"), 3, "S"));
        // Aquatic bioresources
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("129"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("129"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("129"), this.getAlSubjectByName("Biology"), 3, "S"));
        // Urban resources
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("130"), this.getAlSubjectByName("Chemistry"), 1, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("130"), this.getAlSubjectByName("Physics"), 2, "S"));
        alSubjectDependencyRepository.save(new ALSubjectDependency(this.getCourseByCode("130"), this.getAlSubjectByName("Biology"), 3, "S"));
    }

    // Dependency check
    public Boolean performDependencyCheck(Req_ChoosedALSubjects req_choosedALSubjects){
        Boolean firstSubjectValidity = false;
        Boolean secondSubjectValidity = false;
        Boolean thirdSubjectValidity = false;

        Alsubject firstSubject = alSubjectRepository.findAlsubjectByName(req_choosedALSubjects.getFirstSubject());
        Alsubject secondSubject = alSubjectRepository.findAlsubjectByName(req_choosedALSubjects.getSecondSubject());
        Alsubject thirdSubject = alSubjectRepository.findAlsubjectByName(req_choosedALSubjects.getThirdSubject());
        Course course = courseRepository.findByCode(req_choosedALSubjects.getCourseCode());

        if(firstSubject == null) { System.out.println("First subject not exists"); return false; }
        if(secondSubject == null) { System.out.println("Second subject not exists"); return false; }
        if(thirdSubject == null) { System.out.println("Third subject not exists"); return false; }
        if(course == null) { System.out.println("Course not exists"); return false; }

        List<ALSubjectDependency> alSubjectDependencies = alSubjectDependencyRepository.findALSubjectDependenciesByCourse(course);

        // FIRST SUBJECT CHECK
        Integer firstSubjectFoundStatusIndex = 0;
        for (ALSubjectDependency item: alSubjectDependencies){
            if(item.getAlsubject().getId() == firstSubject.getId()){
                firstSubjectValidity = true;
                firstSubjectFoundStatusIndex = item.getStatusIndex();
                break;
            }
        }

        System.out.println("FIRST SUBJECT RELATED");
        System.out.println(firstSubjectValidity);
        System.out.println(firstSubjectFoundStatusIndex);

        // SECOND SUBJECT CHECK
        Integer secondSubjectFoundStatusIndex = 0;
        for (ALSubjectDependency item: alSubjectDependencies){
            if(item.getAlsubject().getId() == secondSubject.getId() && item.getStatusIndex() != firstSubjectFoundStatusIndex){
                secondSubjectValidity = true;
                secondSubjectFoundStatusIndex = item.getStatusIndex();
                break;
            }
        }

        System.out.println("SECOND SUBJECT RELATED");
        System.out.println(secondSubjectValidity);
        System.out.println(secondSubjectFoundStatusIndex);

        // THIRD SUBJECT CHECK
        Integer thirdSubjectFoundStatusIndex = 0;
        for (ALSubjectDependency item: alSubjectDependencies){
            if(item.getAlsubject().getId() == thirdSubject.getId() && item.getStatusIndex() != firstSubjectFoundStatusIndex && item.getStatusIndex() != secondSubjectFoundStatusIndex){
                thirdSubjectValidity = true;
                thirdSubjectFoundStatusIndex = item.getStatusIndex();
                break;
            }
        }

        System.out.println("THIRD SUBJECT RELATED");
        System.out.println(thirdSubjectValidity);
        System.out.println(thirdSubjectFoundStatusIndex);

        if(firstSubjectValidity && secondSubjectValidity && thirdSubjectValidity){
            return true;
        } else {
            return false;
        }
    }

    // Dependency check with results
    public Boolean performDependencyCheckWithResults(Req_ALSubjectsWithResults req_alSubjectsWithResults) {
        Boolean firstSubjectValidity = false;
        Boolean secondSubjectValidity = false;
        Boolean thirdSubjectValidity = false;

        Alsubject firstSubject = alSubjectRepository.findAlsubjectByName(req_alSubjectsWithResults.getFirstSubject());
        Alsubject secondSubject = alSubjectRepository.findAlsubjectByName(req_alSubjectsWithResults.getSecondSubject());
        Alsubject thirdSubject = alSubjectRepository.findAlsubjectByName(req_alSubjectsWithResults.getThirdSubject());
        Course course = courseRepository.findByCode(req_alSubjectsWithResults.getCourseCode());

        if(firstSubject == null) { System.out.println("First subject not exists"); return false; }
        if(secondSubject == null) { System.out.println("Second subject not exists"); return false; }
        if(thirdSubject == null) { System.out.println("Third subject not exists"); return false; }
        if(course == null) { System.out.println("Course not exists"); return false; }

        List<ALSubjectDependency> alSubjectDependencies = alSubjectDependencyRepository.findALSubjectDependenciesByCourse(course);

        // FIRST SUBJECT CHECK
        Integer firstSubjectFoundStatusIndex = 0;
        for (ALSubjectDependency item: alSubjectDependencies){
            if(item.getAlsubject().getId() == firstSubject.getId()){
                // Results checking
                if(gradeChecking(item.getMinGrade(), req_alSubjectsWithResults.getFirstSubjectResult())) {
                    firstSubjectValidity = true;
                    firstSubjectFoundStatusIndex = item.getStatusIndex();
                    break;
                }
            }
        }

        System.out.println("FIRST SUBJECT RELATED");
        System.out.println(firstSubjectValidity);
        System.out.println(firstSubjectFoundStatusIndex);

        // SECOND SUBJECT CHECK
        Integer secondSubjectFoundStatusIndex = 0;
        for (ALSubjectDependency item: alSubjectDependencies){
            if(item.getAlsubject().getId() == secondSubject.getId() && item.getStatusIndex() != firstSubjectFoundStatusIndex){
                // Results checking
                if(gradeChecking(item.getMinGrade(), req_alSubjectsWithResults.getSecondSubjectResult())) {
                    secondSubjectValidity = true;
                    secondSubjectFoundStatusIndex = item.getStatusIndex();
                    break;
                }
            }
        }

        System.out.println("SECOND SUBJECT RELATED");
        System.out.println(secondSubjectValidity);
        System.out.println(secondSubjectFoundStatusIndex);

        // THIRD SUBJECT CHECK
        Integer thirdSubjectFoundStatusIndex = 0;
        for (ALSubjectDependency item: alSubjectDependencies){
            if(item.getAlsubject().getId() == thirdSubject.getId() && item.getStatusIndex() != firstSubjectFoundStatusIndex && item.getStatusIndex() != secondSubjectFoundStatusIndex){
                // Results checking
                if(gradeChecking(item.getMinGrade(), req_alSubjectsWithResults.getThirdSubjectResult())) {
                    thirdSubjectValidity = true;
                    thirdSubjectFoundStatusIndex = item.getStatusIndex();
                    break;
                }
            }
        }

        System.out.println("THIRD SUBJECT RELATED");
        System.out.println(thirdSubjectValidity);
        System.out.println(thirdSubjectFoundStatusIndex);

        if(firstSubjectValidity && secondSubjectValidity && thirdSubjectValidity){
            return true;
        } else {
            return false;
        }
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
