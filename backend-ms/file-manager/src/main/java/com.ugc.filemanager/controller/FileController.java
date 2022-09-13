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

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws Exception {
        File savedFile = null;

        savedFile = fileService.uploadFile(file);

        String downloadURL = ServletUriComponentsBuilder.fromCurrentContextPath().path("/download/").path(savedFile.getId().toString()).toUriString();

        ResFile resFile = new ResFile(savedFile.getFileName(), downloadURL, file.getContentType(), file.getSize());

        return ResponseEntity.ok(new PayloadResponse(resFile, "File found", ResType.OK));
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Integer fileId) throws Exception {
        File file = null;

        file = fileService.downloadFile(fileId);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(file.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment: filename=\"" + file.getFileName() + "\"")
                .body(new ByteArrayResource(file.getData()));
    }
}
