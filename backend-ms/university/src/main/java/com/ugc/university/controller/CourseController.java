package com.ugc.university.controller;

import com.ugc.university.payload.request.course.AddCourseForm;
import com.ugc.university.payload.response.MessageResponse;
import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.course.CourseResponse;
import com.ugc.university.payload.response.course.StreamResponse;
import com.ugc.university.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/getStreams")
    public ResponseEntity<?> getAllStreams(){
        List<StreamResponse> streamList = courseService.getStreams();
        return ResponseEntity.ok(new PayloadResponse(streamList, "All streams list", ResType.OK));
    }

    // TODO: Read all
    @GetMapping("/all")
    public ResponseEntity<?> getAllCourseList(){
        List<CourseResponse> courseResponseList = courseService.getAllCourseList();
        return ResponseEntity.ok(new PayloadResponse(courseResponseList, "All courses list", ResType.OK));
    }

    // TODO: Create course

    @PostMapping("/create")
    public ResponseEntity<?> createCourse(@RequestBody AddCourseForm addCourseForm){
        if(courseService.create(addCourseForm.getName(),
                addCourseForm.getCode(),
                addCourseForm.getStream(),
                addCourseForm.getIntake())){
            return ResponseEntity.ok(new MessageResponse("Course created"));
        }

        return ResponseEntity.ok(new MessageResponse("Course creation failed"));
    }
    // TODO: Update course
    // TODO: Delete course


}
