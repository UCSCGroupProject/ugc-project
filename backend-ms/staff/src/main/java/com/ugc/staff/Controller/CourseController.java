package com.ugc.staff.Controller;

import com.ugc.staff.Model.Course;
import com.ugc.staff.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/course")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/getCourses")
    public List<Course> getCourses(){
        return courseService.getCourses();
    }
}
