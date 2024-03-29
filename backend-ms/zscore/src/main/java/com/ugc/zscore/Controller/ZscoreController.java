package com.ugc.zscore.Controller;

import com.ugc.university.payload.response.ResType;
import com.ugc.zscore.Helper.CSVHelper;
import com.ugc.zscore.Model.Zscore;
import com.ugc.zscore.Model.ZscoreTable;
import com.ugc.zscore.Services.ZScoreTableService;
import com.ugc.zscore.Services.ZscoreService;
import com.ugc.zscore.Services.ZscoreTableServiceImpl;
import com.ugc.zscore.payload.request.EditZscoreValueForm;
import com.ugc.zscore.payload.response.PayloadResponse;
import com.ugc.zscore.payload.response.ResponseMessage;
import com.ugc.zscore.payload.response.ZScoreResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api/zscore")
@CrossOrigin("*")

public class ZscoreController {

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String helloWorld(){
//        return "Welcome Ashi";
//    }

    @Autowired
    ZscoreService fileService;

    @PostMapping("/import")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";

        if (CSVHelper.hasCSVFormat(file)) {
            try {
                fileService.save(file);

                message = "Uploaded the file successfully: " + file.getOriginalFilename();

                String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/api/zscore/download/")
                        .path(file.getOriginalFilename())
                        .toUriString();

                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message,fileDownloadUri));
            } catch (Exception e) {
                message = "Could not upload the file: " + file.getOriginalFilename() + "!";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message,""));
            }
        }

        message = "Please upload a csv file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message,""));
    }

    @GetMapping("/view")
    public ResponseEntity<?> getAllZvalues() {
        return fileService.getAllZvalues();
    }

    @GetMapping("/ztables")
    public ResponseEntity<List<Zscore>> getAllTutorials() {
        try {
            List<Zscore> tutorials = fileService.getAllTutorials();

            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        InputStreamResource file = new InputStreamResource(fileService.load());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName)
                .contentType(MediaType.parseMediaType("application/csv"))
                .body(file);
    }

    @Autowired
    private ZScoreTableService zscoreTableService;
    @PostMapping("/addZValue")
    public ZscoreTable addValue(@RequestBody ZscoreTable zscoreTable) {
        return zscoreTableService.saveZvalue(zscoreTable);
    }

    @GetMapping ("/ZValue")
    public List<ZscoreTable> searchValue() {
        return zscoreTableService.fetchZscoreTable();
    }

    @PutMapping ("/updateZValue/{id}")
    public ZscoreTable updateValue(@PathVariable("id") Long z_id, @RequestBody ZscoreTable zscoreTable) {
        return zscoreTableService.updateZvalue(z_id, zscoreTable);
    }

    @DeleteMapping ("/deleteZValue/{id}")
    public String deleteValuebyId(@PathVariable("id") Long z_id) {
        zscoreTableService.deleteZvalueById(z_id);
        return "Z-score value deleted successfully";
    }

    @GetMapping("/getZvalueId")
    public ResponseEntity<?> getZvalue(@RequestParam(name = "id") Long id){
        List<ZScoreResponse> zScoreResponsesList = fileService.getZvalue(id);

        return ResponseEntity.ok(new PayloadResponse(zScoreResponsesList, "Z-score value Sent", ResType.OK));
    }
    @PutMapping("/update")
    public ResponseEntity<?> updateZvalue(@RequestBody EditZscoreValueForm editZvalueForm){
        return fileService.update(editZvalueForm);
    }

}
