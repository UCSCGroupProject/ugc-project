package com.ugc.filemanager.service;

import com.ugc.filemanager.model.File;
import com.ugc.filemanager.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public File uploadFile(MultipartFile file) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            if (fileName.contains("..")) {
                throw new Exception("Filename contains invalid path sequence");
            }

            File saveFile = new File(
                    fileName,
                    file.getContentType(),
                    file.getBytes()
            );

            return fileRepository.save(saveFile);
        } catch (Exception e) {
           throw new Exception("Could not save file");
        }
    }

    public File downloadFile(Integer fileId) throws Exception {
        return fileRepository.findById(fileId)
                .orElseThrow(() -> new Exception("File not found"));
    }
}
