package com.ugc.school.service;

import com.ugc.school.model.School;
import com.ugc.school.model.document.StudentRecord;
import com.ugc.school.model.document.ValidationDocument;
import com.ugc.school.payload.response.PayloadResponse;
import com.ugc.school.payload.response.ResType;
import com.ugc.school.payload.response.document.ResStudentRecord;
import com.ugc.school.payload.response.document.ResValidationDocument;
import com.ugc.school.repository.SchoolRepository;
import com.ugc.school.repository.document.ValidationDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SupportService {
    @Autowired
    private ValidationDocumentRepository validationDocumentRepository;
    @Autowired
    private SchoolRepository schoolRepository;

    public ResValidationDocument getDocument(String username) {
        School school = schoolRepository.findByUsername(username);

        ValidationDocument document = validationDocumentRepository.findValidationDocumentBySchool(school);

        List<StudentRecord> studentRecords =  document.getStudentRecords();
        List<ResStudentRecord> resStudentRecords = new ArrayList<>();

        studentRecords.forEach(item -> {
            ResStudentRecord resStudentRecord = new ResStudentRecord(
                    item.getId(),
                    item.getStuIndex(),
                    item.getFullName(),
                    item.getNic(),
                    item.getAdmissionDate(),
                    item.getLeaveDate(),
                    item.getValidity()
            );

            resStudentRecords.add(resStudentRecord);
        });

        ResValidationDocument resValidationDocument = new ResValidationDocument(
                document.getId(),
                document.getSchool().getId(),
                document.getSchool().getSchoolDetails().getName(),
                document.getSchool().getUsername(),
                document.getSchool().getSchoolDetails().getAddress(),
                resStudentRecords,
                document.getStatus()
        );

        if(document != null) {
            return resValidationDocument;
        } else {
            return null;
        }
    }
}
