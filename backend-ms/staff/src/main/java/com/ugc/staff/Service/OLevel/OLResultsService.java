package com.ugc.staff.Service.OLevel;

import com.ugc.staff.Helper.CSVHelper;
import com.ugc.staff.Model.OLevel.OLResults;
import com.ugc.staff.Model.OLevel.OLStudentResult;
import com.ugc.staff.Payload.Response.OLevel.OLResultsResponse;
import com.ugc.staff.Payload.Response.OLevel.OLStudentResultResponse;
import com.ugc.staff.Payload.Response.PayloadResponse;
import com.ugc.staff.Repository.OLevel.OLResultsRepository;
import com.ugc.staff.Repository.OLevel.OLStudentRepository;
import com.ugc.staff.Repository.OLevel.OLSubjectRepository;
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
public class OLResultsService {
    @Autowired
    OLResultsRepository olResultsRepository;
    @Autowired
    OLStudentRepository olStudentRepository;
    @Autowired
    private OLSubjectRepository olSubjectRepository;

    public void save(MultipartFile file) {
        try {
            Map<List<OLResults>, List<OLStudentResult>> listPair = CSVHelper.csvToOLResults(file.getInputStream(), olSubjectRepository);
            Map.Entry<List<OLResults>, List<OLStudentResult>> entry = listPair.entrySet().iterator().next();
            List<OLResults> olResults = entry.getKey();
            List<OLStudentResult> olStudentResults = entry.getValue();
            olResultsRepository.saveAll(olResults);
            olStudentRepository.saveAll(olStudentResults);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store csv data: " + e.getMessage());
        }
    }

    public ResponseEntity<?> getAllResults() {
        List<OLResultsResponse> olResultsResponses = new ArrayList<>();

        List<OLResults> olResults = olResultsRepository.findAll();

        if(olResults != null) {
            olResults.forEach(item -> {
                OLResultsResponse olResultsResponse = new OLResultsResponse(
                        item.getId(),
                        item.getName(),
                        item.getIndexNumber(),
                        item.getDistrict(),
                        item.getSchool(),
                        item.getIslandRank(),
                        item.getStudentStatus(),
                        item.getPassOrFail()
                );

                olResultsResponses.add(olResultsResponse);
            });

            return ResponseEntity.ok(new PayloadResponse(olResultsResponses, "Results found", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Results not found", ResType.BAD));
        }

    }

    public List<OLStudentResultResponse> getStudentResults(Integer studentId) {
        List<OLStudentResultResponse> olStudentResultResponseList = new ArrayList<>();
        OLResults olResults = olResultsRepository.getById(studentId);
        List<OLStudentResult> olStudentResults = olStudentRepository.findByOlResults(olResults);
        olStudentResults.forEach(item -> {
            OLStudentResultResponse olStudentResultResponse = new OLStudentResultResponse(
                    item.getOlSubject().getId(),
                    item.getOlSubject().getName(),
                    item.getGrade()
            );

            olStudentResultResponseList.add(olStudentResultResponse);
        });

        return olStudentResultResponseList;
    }
}
