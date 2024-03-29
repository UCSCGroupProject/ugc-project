package com.ugc.school.service.document;

import com.ugc.school.model.School;
import com.ugc.school.model.defaultschool.DefaultSchool;
import com.ugc.school.model.document.StudentRecord;
import com.ugc.school.model.document.UploadedDocument;
import com.ugc.school.model.document.ValidationDocument;
import com.ugc.school.payload.request.document.ReqValidationDocument;
import com.ugc.school.payload.request.document.ReqStudentRecord;
import com.ugc.school.payload.response.PayloadResponse;
import com.ugc.school.payload.response.ResType;
import com.ugc.school.payload.response.document.ResStudentRecord;
import com.ugc.school.payload.response.document.ResValidationDocument;
import com.ugc.school.repository.SchoolRepository;
import com.ugc.school.repository.defaultSchool.DefaultSchoolRepository;
import com.ugc.school.repository.document.UploadedDocumentRepository;
import com.ugc.school.repository.document.ValidationDocumentRepository;
import com.ugc.school.repository.document.StudentRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class ValidationDocumentService {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ValidationDocumentRepository validationDocumentRepository;
    @Autowired
    private StudentRecordRepository studentRecordRepository;
    @Autowired
    private SchoolRepository schoolRepository;
    @Autowired
    private DefaultSchoolRepository defaultSchoolRepository;


    public ResponseEntity<?> getDocument(String username) {
        School school = schoolRepository.findByUsername(username);

        ValidationDocument document = validationDocumentRepository.findValidationDocumentBySchool(school);

        System.out.println("OUT" + document.toString());

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
            return ResponseEntity.ok(new PayloadResponse(resValidationDocument, "Document found", ResType.OK));
        } else {
            return ResponseEntity.ok(new PayloadResponse(null, "Document not found", ResType.BAD));
        }
    }

    public ResponseEntity<?> createDocument(ReqValidationDocument reqValidationDocument) {
        School school = schoolRepository.findByUsername(reqValidationDocument.getSchoolUsername());


        ValidationDocument validationDocument = validationDocumentRepository.findValidationDocumentBySchool(school);



        if(validationDocument != null){
            // Delete student records if exists
            List<StudentRecord> studentRecords = studentRecordRepository.findStudentRecordsByDocument(validationDocument);

            studentRecords.forEach(item -> {
                studentRecordRepository.delete(item);
            });

            // Delete validation document if exists
            validationDocumentRepository.delete(validationDocument);
        }

        ValidationDocument document = new ValidationDocument(
                school,
                reqValidationDocument.getStatus()
        );

        validationDocumentRepository.save(document);

        List<ReqStudentRecord> reqStudentRecords = reqValidationDocument.getStudentRecords();


        reqStudentRecords.forEach(item -> {
            StudentRecord studentRecord = new StudentRecord(
                    item.getStuIndex(),
                    item.getFullName(),
                    item.getNic(),
                    item.getAdmissionDate(),
                    item.getLeaveDate(),
                    item.getValidity(),
                    document
            );

            studentRecordRepository.save(studentRecord);
        });

        return ResponseEntity.ok(new PayloadResponse(null, "Document saved", ResType.OK));
    }

    public ResponseEntity<?> updateDocument(ReqValidationDocument reqValidationDocument) {
        School school = schoolRepository.findByUsername(reqValidationDocument.getSchoolUsername());

        ValidationDocument document = validationDocumentRepository.findValidationDocumentBySchool(school);
        document.setStatus(true);

        if(document != null){
            List<ReqStudentRecord> reqStudentRecords = reqValidationDocument.getStudentRecords();

            reqStudentRecords.forEach(item -> {
                StudentRecord studentRecord = studentRecordRepository.findStudentRecordById(item.getId());

                if(studentRecord != null) {
                    studentRecord.setValidity(item.getValidity());

                    studentRecordRepository.save(studentRecord);
                }
                else {
                    System.out.println("Record not found");
                }
            });
            validationDocumentRepository.save(document);
            return ResponseEntity.ok(new PayloadResponse(null, "Document updated", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Document not found", ResType.BAD));
        }
    }


}
