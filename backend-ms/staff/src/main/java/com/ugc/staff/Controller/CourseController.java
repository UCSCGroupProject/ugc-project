package com.ugc.staff.Controller;

import com.ugc.staff.Model.Course;
import com.ugc.staff.Payload.Response.Course.CourseResponse;
import com.ugc.staff.Payload.Response.PayloadResponse;
import com.ugc.staff.Service.CourseService;
import com.ugc.university.payload.response.ResType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/staff/course")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getCourses(){
        List<CourseResponse> courseResponses = courseService.getCourses();
        return ResponseEntity.ok(new PayloadResponse(courseResponses, "All courses list", ResType.OK));
    }
}
