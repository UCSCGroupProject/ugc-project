package com.ugc.zscore.Services;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.ugc.university.payload.response.ResType;
import com.ugc.zscore.Helper.CSVHelper;
import com.ugc.zscore.Helper.CSVsHelper;
import com.ugc.zscore.Model.ZTable;
import com.ugc.zscore.Model.Zscore;
import com.ugc.zscore.Repository.ZTableRepository;
import com.ugc.zscore.payload.response.PayloadResponse;
import com.ugc.zscore.payload.response.ZScoreResponse;
import com.ugc.zscore.payload.response.ZScoreTableResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CSVService {
    @Autowired
    ZTableRepository repository;

    public void save(MultipartFile file) {
        try {
            List<ZTable> tutorials = CSVsHelper.csvToTutorials(file.getInputStream());
            repository.saveAll(tutorials);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public ResponseEntity<?> getAllZvalues() {
        List<ZScoreTableResponse> zScoreResponses = new ArrayList<>();

        List<ZTable> alResults = repository.findAll();

        if(alResults != null) {
            alResults.forEach(item -> {
                ZScoreTableResponse zScoreResponse = new ZScoreTableResponse(
                        item.getId(),
                        item.getDistrict(),
                        item.getCourse(),
                        item.getUni(),
                        item.getUni_code(),
                        item.getZvalue()
                );

                zScoreResponses.add(zScoreResponse);
            });

            return ResponseEntity.ok(new PayloadResponse(zScoreResponses, "Results found", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Results not found", ResType.BAD));
        }

    }

    public ByteArrayInputStream load() {
        List<ZTable> tutorials = repository.findAll();

        ByteArrayInputStream in = CSVsHelper.tutorialsToCSV(tutorials);
        return in;
    }

    public List<ZTable> getAllTutorials() {
        return repository.findAll();
    }
}
