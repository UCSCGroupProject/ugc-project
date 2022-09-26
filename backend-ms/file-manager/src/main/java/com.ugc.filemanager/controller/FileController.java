package com.ugc.filemanager.controller;

import com.ugc.filemanager.model.File;
import com.ugc.filemanager.payload.response.PayloadResponse;
import com.ugc.filemanager.payload.response.ResType;
import com.ugc.filemanager.payload.response.objects.ResFile;
import com.ugc.filemanager.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/file")
public class FileController {
    @Autowired
    private FileService fileService;

    @PostMapping("")
//    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
//        File savedFile = null;
//
//        try {
//            savedFile = fileService.uploadFile(file);
//
//            String downloadURL = ServletUriComponentsBuilder.fromCurrentContextPath().path("/download/").path(savedFile.getId().toString()).toUriString();
//
//            ResFile resFile = new ResFile(savedFile.getFileName(), downloadURL, file.getContentType(), file.getSize());
//
//            return ResponseEntity.ok(new PayloadResponse(resFile, "File successfully uploaded", ResType.OK));
//        } catch (Exception e) {
//            return ResponseEntity.ok(new PayloadResponse(null, "File uploading failed", ResType.BAD));
//        }
//    }
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            File savedFile = null;

            savedFile = fileService.uploadFile(file);

            ResFile resFile = new ResFile(savedFile.getId(), savedFile.getFileName());

            return ResponseEntity.ok(new PayloadResponse(resFile, "File successfully uploaded", ResType.OK));
        } catch (Exception e) {
            return ResponseEntity.ok(new PayloadResponse(null, "File uploading failed", ResType.BAD));
        }
    }

    @GetMapping("")
    public ResponseEntity<Resource> downloadFile(@RequestParam(name = "fileId") Integer fileId){
        try {
            File file = null;
            file = fileService.downloadFile(fileId);

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(file.getFileType()))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment: filename=\"" + file.getFileName() + "\"")
                    .body(new ByteArrayResource(file.getData()));
        } catch (Exception e) {
//            return ResponseEntity.ok(new PayloadResponse(null, "Downlaading failed", ResType.BAD));
            return null;
        }
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteFile(@RequestParam(name = "fileId") Integer fileId) {
        fileService.deleteFile(fileId);

        return ResponseEntity.ok(new PayloadResponse(null, "File successfully deleted", ResType.OK));
    }
}
