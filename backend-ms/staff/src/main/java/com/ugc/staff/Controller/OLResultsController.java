package com.ugc.staff.Controller;

import com.ugc.staff.Helper.CSVHelper;
import com.ugc.staff.Payload.Request.Results.EditResultsForm;
import com.ugc.staff.Payload.Response.OLevel.OLResultRequest;
import com.ugc.staff.Payload.Response.OLevel.OLStudentResultResponse;
import com.ugc.staff.Payload.Response.PayloadResponse;
import com.ugc.staff.Service.OLevel.OLResultsService;
import com.ugc.university.payload.response.ResType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/staff/olresults")
public class OLResultsController {

    @Autowired
    OLResultsService olResultsService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";

        if (CSVHelper.hasCSVFormat(file)) {
            try {
                olResultsService.save(file);

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
        return olResultsService.getAllResults();
    }


    @GetMapping("/getStudentResults")
    public ResponseEntity<?> getUniCourseList(@RequestParam(name = "studentId") Integer studentId){
        List<OLStudentResultResponse> olStudentResultResponseList = olResultsService.getStudentResults(studentId);

        return ResponseEntity.ok(new PayloadResponse(olStudentResultResponseList, "Student Results Sent", ResType.OK));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateResults(@RequestBody EditResultsForm editOLResultsForm){
        return olResultsService.update(editOLResultsForm);
    }

    @GetMapping("/getOLResult")
    public OLResultRequest getOLResult(@RequestParam String studentId, @RequestParam String subject){
        return olResultsService.getResultOfSubject(studentId, subject);
    }
}
