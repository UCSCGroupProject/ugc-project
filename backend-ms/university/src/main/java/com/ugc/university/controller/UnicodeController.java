package com.ugc.university.controller;

import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.course.CourseIntakeRequest;
import com.ugc.university.payload.response.course.UniCourseResponse;
import com.ugc.university.service.course.UnicodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university/unicode")
public class UnicodeController {
    @Autowired
    private UnicodeService unicodeService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUniCourseList(){
        List<UniCourseResponse> uniCourseResponseList = unicodeService.getAllUniCourseList();

        return ResponseEntity.ok(new PayloadResponse(uniCourseResponseList, "All courses list", ResType.OK));
    }

//    @GetMapping("")
//    public ResponseEntity<?> getUniCourse(@RequestParam(name = "courseCode") String courseCode) {
//        return unicodeService.getUnicodeOverview(courseCode);
//    }

    @GetMapping("/getUnicodes")
    public ResponseEntity<?> getUniCourseList(@RequestParam(name = "courseId") Integer courseId){
        List<UniCourseResponse> uniCourseResponseList = unicodeService.getUnicodeList(courseId);

        return ResponseEntity.ok(new PayloadResponse(uniCourseResponseList, "All courses list", ResType.OK));
    }

    @GetMapping("/getCourseAndUniversity")
    public Map<String, String> getCourseAndUniversity(@RequestParam(name = "unicodeId") String unicodeId){
        Map<String, String> courseAndUniversity = unicodeService.getCourseAndUniversity(unicodeId);
        return courseAndUniversity;
    }

    @GetMapping("/getUnicodeIntake")
    public CourseIntakeRequest getUnicodeIntake(){
        return unicodeService.getUnicodeIntake();
    }
}
