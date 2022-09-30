package com.ugc.university.controller;

import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.course.UniCourseResponse;
import com.ugc.university.service.course.UnicodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("")
    public ResponseEntity<?> getUniCourse(@RequestParam(name = "unicodeValue") String unicodeValue) {
        System.out.println("Unicode value : " + unicodeValue);
        return unicodeService.getUnicodeOverview(unicodeValue);
    }

    @GetMapping("/getUnicodes")
    public ResponseEntity<?> getUniCourseList(@RequestParam(name = "courseId") Integer courseId){
        List<UniCourseResponse> uniCourseResponseList = unicodeService.getUnicodeList(courseId);

        return ResponseEntity.ok(new PayloadResponse(uniCourseResponseList, "All courses list", ResType.OK));
    }

}
