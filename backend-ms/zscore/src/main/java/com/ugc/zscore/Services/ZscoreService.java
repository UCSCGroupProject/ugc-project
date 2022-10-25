package com.ugc.zscore.Services;

import com.ugc.university.payload.response.ResType;
import com.ugc.zscore.Helper.CSVHelper;
import com.ugc.zscore.Model.Zscore;
import com.ugc.zscore.Repository.ZscoreRepository;
import com.ugc.zscore.payload.request.EditZscoreValueForm;
import com.ugc.zscore.payload.response.PayloadResponse;
import com.ugc.zscore.payload.response.ZScoreResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;


import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList;

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

    public ResponseEntity<?> getAllZvalues() {
        List<ZScoreResponse> zScoreResponses = new ArrayList<>();

        List<Zscore> alResults = repository.findAll();

        if(alResults != null) {
            alResults.forEach(item -> {
                ZScoreResponse zScoreResponse = new ZScoreResponse(
                        item.getId(),
                        item.getfirst_name(),
                        item.getlast_name(),
                        item.getCourse(),
                        item.getUni(),
                        item.getage()
//                        item.getUni_code(),
//                        item.getZvalue()
                );

                zScoreResponses.add(zScoreResponse);
            });

            return ResponseEntity.ok(new PayloadResponse(zScoreResponses, "Results found", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Results not found", ResType.BAD));
        }

    }

    public List<ZScoreResponse> getZvalue(Long id) {
        List<ZScoreResponse> zValueList = new ArrayList<>();
        Zscore zscore = repository.getById(id);
        System.out.println(zscore);
            ZScoreResponse zScoreResponse = new ZScoreResponse(
                    zscore.getId(),
                    zscore.getCourse(),
                    zscore.getUni(),
                    zscore.getfirst_name(),
                    zscore.getlast_name(),
                    zscore.getage()
            );

            zValueList.add(zScoreResponse);
//        });

        return zValueList;
    }

    public ResponseEntity<?> update(EditZscoreValueForm editZvalueForm) {
        String id = editZvalueForm.getId();
        String zvalue = editZvalueForm.getZvalue();
//        for(ResultRow result : editZvalueForm.getResults()){
//            ALResultKey alResultKey = new ALResultKey();
//            alResultKey.setStudentId(Integer.valueOf(studentId));
//            alResultKey.setAlSubjectId(Integer.valueOf(result.getSubjectId()));
//            ALStudentResult alStudentResult = alStudentRepository.getById(alResultKey);
//            alStudentResult.setGrade(result.getGrade());
//            alStudentRepository.save(alStudentResult);
//        }
        return ResponseEntity.ok(new PayloadResponse(null, "Results updated", ResType.OK));
    }
}
