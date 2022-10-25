package com.ugc.staff.Service.OLevel;

import com.ugc.staff.Helper.CSVHelper;
import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.ALevel.ALSubject;
import com.ugc.staff.Model.OLevel.OLResultKey;
import com.ugc.staff.Model.OLevel.OLResults;
import com.ugc.staff.Model.OLevel.OLStudentResult;
import com.ugc.staff.Model.OLevel.OLSubject;
import com.ugc.staff.Payload.Request.Results.EditResultsForm;
import com.ugc.staff.Payload.Request.Results.ResultRow;
import com.ugc.staff.Payload.Response.ALevel.ALSubjectResponse;
import com.ugc.staff.Payload.Response.OLevel.OLResultRequest;
import com.ugc.staff.Payload.Response.OLevel.OLResultsResponse;
import com.ugc.staff.Payload.Response.OLevel.OLStudentResultResponse;
import com.ugc.staff.Payload.Response.OLevel.OLSubjectResponse;
import com.ugc.staff.Payload.Response.PayloadResponse;
import com.ugc.staff.Repository.OLevel.OLResultsRepository;
import com.ugc.staff.Repository.OLevel.OLStudentResultRepository;
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
    OLStudentResultRepository olStudentRepository;
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
        List<OLStudentResult> olStudentResults = olStudentRepository.findById_studentId(olResults.getId());
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

    public ResponseEntity<?> update(EditResultsForm editOLResultsForm) {
        String studentId = editOLResultsForm.getStudentId();
        for(ResultRow result : editOLResultsForm.getResults()){
            OLResultKey olResultKey = new OLResultKey();
            olResultKey.setStudentId(Integer.valueOf(studentId));
            olResultKey.setOlSubjectId(Integer.valueOf(result.getSubjectId()));
            OLStudentResult olStudentResult = olStudentRepository.getById(olResultKey);
            olStudentResult.setGrade(result.getGrade());
            olStudentRepository.save(olStudentResult);
        }
        return ResponseEntity.ok(new PayloadResponse(null, "Results updated", ResType.OK));
    }

    public OLResultRequest getResultOfSubject(String studentId, String subject) {
        String grade = olStudentRepository.getSubjectResult(studentId, subject);
        OLResultRequest olResultRequest = new OLResultRequest(grade);
        return olResultRequest;
    }

    public OLSubjectResponse getStudentSubjects(String olIndex) {
        OLResults studentId = olResultsRepository.getIndex(olIndex);
        OLSubject mathematics = olSubjectRepository.getById(11);
        OLSubject science = olSubjectRepository.getById(10);
        OLSubject english = olSubjectRepository.getById(8);
        String mathsGrade = olStudentRepository.getGrade(studentId, mathematics);
        String scienceGrade = olStudentRepository.getGrade(studentId, science);
        String englishGrade = olStudentRepository.getGrade(studentId, english);

        OLSubjectResponse olSubjectResponse = new OLSubjectResponse(olIndex, englishGrade, mathsGrade, scienceGrade);

        return  olSubjectResponse;
    }
}
