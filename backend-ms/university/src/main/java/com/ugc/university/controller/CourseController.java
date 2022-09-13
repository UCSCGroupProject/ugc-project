package com.ugc.university.controller;

import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.course.CourseResponse;
import com.ugc.university.payload.response.course.UniCourseResponse;
import com.ugc.university.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllCourseList(){
        List<CourseResponse> courseResponseList = courseService.getAllCourseList();
        return ResponseEntity.ok(new PayloadResponse(courseResponseList, "All courses list", ResType.OK));
    }
}
