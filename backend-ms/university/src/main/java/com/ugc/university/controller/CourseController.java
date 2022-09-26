package com.ugc.university.controller;

import com.ugc.university.model.course.Course;
import com.ugc.university.payload.request.course.AddCourseForm;
import com.ugc.university.payload.request.course.EditCourseForm;
import com.ugc.university.payload.response.MessageResponse;
import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.course.CourseResponse;
import com.ugc.university.payload.response.course.StreamResponse;
import com.ugc.university.payload.response.course.UniCourseResponse;
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
        return courseService.create(addCourseForm.getName(),
                addCourseForm.getCode(),
                addCourseForm.getStream(),
                addCourseForm.getIntake());
    }
    // TODO: Update course
    @GetMapping ("/getCourseDetails")
    public ResponseEntity<?> getCourseDetails(@RequestParam(name = "courseId") Integer courseId){
        CourseResponse course = courseService.getCourseDetails(courseId);
        return ResponseEntity.ok(new PayloadResponse(course, "Course Details sent", ResType.OK));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCourse(@RequestBody EditCourseForm editCourseForm){
        return courseService.update(editCourseForm.getId(), editCourseForm.getName(),
                editCourseForm.getCode(),
                editCourseForm.getStream(),
                editCourseForm.getIntake());
    }
    // TODO: Delete course


}
