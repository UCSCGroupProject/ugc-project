package com.ugc.university;

import com.ugc.university.service.UniversityService;
import com.ugc.university.service.alsubject.ALSubjectDependencyService;
import com.ugc.university.service.alsubject.ALSubjectService;
import com.ugc.university.service.course.CourseService;
import com.ugc.university.service.course.StreamService;
import com.ugc.university.service.course.UnicodeService;
import com.ugc.university.service.olsubject.OLSubjectDependencyService;
import com.ugc.university.service.olsubject.OLSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialRunner implements CommandLineRunner {
    @Autowired
    private StreamService streamService;
    @Autowired
    private CourseService courseService;
    @Autowired
    private UniversityService universityService;
    @Autowired
    private UnicodeService unicodeService;
    @Autowired
    private ALSubjectService alSubjectService;
    @Autowired
    private ALSubjectDependencyService alSubjectDependencyService;
    @Autowired
    private OLSubjectService olSubjectService;
    @Autowired
    private OLSubjectDependencyService olSubjectDependencyService;

    @Override
    public void run(String... args) throws Exception {
        streamService.initStreams();
        courseService.initCourses();
        universityService.initRoles();
        universityService.initUniversity();
        unicodeService.initUnicodes();

        alSubjectService.initALSubjects();
        alSubjectDependencyService.initALSubjectDependencies();

        olSubjectService.initOLSubjects();
        olSubjectDependencyService.initOLSubjectDependencies();
    }
}
