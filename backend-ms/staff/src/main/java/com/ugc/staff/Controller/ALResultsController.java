package com.ugc.staff.Controller;

import com.ugc.staff.Helper.CSVHelper;
import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Payload.Response.ALevel.ALResultsResponse;
import com.ugc.staff.Payload.Response.ALevel.ALStudentResultResponse;
import com.ugc.staff.Payload.Response.PayloadResponse;
import com.ugc.staff.Service.ALResultsService;
import com.ugc.university.payload.response.ResType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/staff/alresults")
public class ALResultsController {

    @Autowired
    ALResultsService alResultsService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";

        if (CSVHelper.hasCSVFormat(file)) {
            try {
                alResultsService.save(file);

                message = "Uploaded the file successfully: " + file.getOriginalFilename();
                return ResponseEntity.ok(new PayloadResponse(null, message, ResType.OK));
            } catch (Exception e) {
                message = "Could not upload the file: " + e.getMessage() + "!";
                return ResponseEntity.ok(new PayloadResponse(null, message, ResType.OK));
            }
        }

        message = "Please upload a csv file!";
        return ResponseEntity.ok(new PayloadResponse(null, message, ResType.OK));
    }

    @GetMapping("/view")
    public ResponseEntity<?> getAllResults() {
        return alResultsService.getAllResults();
    }


    @GetMapping("/getStudentResults")
    public ResponseEntity<?> getUniCourseList(@RequestParam(name = "studentId") Integer studentId){
        List<ALStudentResultResponse> alStudentResultResponseList = alResultsService.getStudentResults(studentId);

        return ResponseEntity.ok(new PayloadResponse(alStudentResultResponseList, "Student Results Sent", ResType.OK));
    }
}
