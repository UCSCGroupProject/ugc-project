package com.ugc.staff.Service.ALevel;

import com.ugc.staff.Helper.CSVHelper;
import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.ALevel.ALStudentResult;
import com.ugc.staff.Payload.Response.ALevel.ALResultsResponse;
import com.ugc.staff.Payload.Response.ALevel.ALStudentResultResponse;
import com.ugc.staff.Payload.Response.PayloadResponse;
import com.ugc.staff.Repository.ALevel.ALResultsRepository;
import com.ugc.staff.Repository.ALevel.ALStudentRepository;
import com.ugc.staff.Repository.ALevel.ALSubjectRepository;
import com.ugc.university.payload.response.ResType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ALResultsService {
    @Autowired
    ALResultsRepository alResultsRepository;
    @Autowired
    ALStudentRepository alStudentRepository;

    @Autowired
    private ALSubjectRepository alSubjectRepository;

    public void save(MultipartFile file) {
        try {
            Map<List<ALResults>, List<ALStudentResult>> listPair = CSVHelper.csvToALResults(file.getInputStream(), alSubjectRepository);
            Map.Entry<List<ALResults>, List<ALStudentResult>> entry = listPair.entrySet().iterator().next();
            List<ALResults> alResults = entry.getKey();
            List<ALStudentResult> alStudentResults = entry.getValue();
            alResultsRepository.saveAll(alResults);
            alStudentRepository.saveAll(alStudentResults);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store csv data: " + e.getMessage());
        }
    }

    public ResponseEntity<?> getAllResults() {
        List<ALResultsResponse> alResultsResponses = new ArrayList<>();

        List<ALResults> alResults = alResultsRepository.findAll();

        if(alResults != null) {
            alResults.forEach(item -> {
                ALResultsResponse alResultsResponse = new ALResultsResponse(
                        item.getId(),
                        item.getName(),
                        item.getIndexNumber(),
                        item.getZscore(),
                        item.getStream(),
                        item.getDistrict(),
                        item.getSchool(),
                        item.getDistrictRank(),
                        item.getIslandRank(),
                        item.getStudentStatus(),
                        item.getPassOrFail()
                );

                alResultsResponses.add(alResultsResponse);
            });

            return ResponseEntity.ok(new PayloadResponse(alResultsResponses, "Results found", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Results not found", ResType.BAD));
        }

    }

    public List<ALStudentResultResponse> getStudentResults(Integer studentId) {
        List<ALStudentResultResponse> alStudentResultResponseList = new ArrayList<>();
        ALResults alResults = alResultsRepository.getById(studentId);
        List<ALStudentResult> alStudentResults = alStudentRepository.findByAlResults(alResults);
        System.out.println(alStudentResults);
        alStudentResults.forEach(item -> {
            ALStudentResultResponse alStudentResultResponse = new ALStudentResultResponse(
                    item.getAlSubject().getId(),
                    item.getAlSubject().getName(),
                    item.getGrade()
            );

            alStudentResultResponseList.add(alStudentResultResponse);
        });

        return alStudentResultResponseList;
    }
}
