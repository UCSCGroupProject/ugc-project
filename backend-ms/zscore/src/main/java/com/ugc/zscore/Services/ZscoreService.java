package com.ugc.zscore.Services;

import com.ugc.zscore.Helper.CSVHelper;
import com.ugc.zscore.Model.Zscore;
import com.ugc.zscore.Repository.ZscoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@Service
public class ZscoreService {

    @Autowired
    ZscoreRepository repository;

    public void save(MultipartFile file) {
        try {
            List<Zscore> tutorials = CSVHelper.csvToTutorials(file.getInputStream());
            repository.saveAll(tutorials);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public ByteArrayInputStream load() {
        List<Zscore> tutorials = repository.findAll();

        ByteArrayInputStream in = CSVHelper.tutorialsToCSV(tutorials);
        return in;
    }

    public List<Zscore> getAllTutorials() {
        return repository.findAll();
    }
}
