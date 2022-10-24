package com.ugc.student.controller;

import com.ugc.student.model.universityAdmission.*;
import com.ugc.student.payload.request.universityAdmission.Step1FormRequest;
import com.ugc.student.payload.request.universityAdmission.Step2FormRequest;
import com.ugc.student.payload.request.universityAdmission.Step3FormRequest;
import com.ugc.student.payload.request.universityAdmission.Step4FormRequest;
import com.ugc.student.payload.response.MessageResponse;
import com.ugc.student.payload.response.universityAdmission.*;
import com.ugc.student.service.UniversityAdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student/universityAdmission")
public class UniversityAdmissionController {
    @Autowired
    UniversityAdmissionService universityAdmissionService;

    // STEP 1
    @GetMapping("/step1Form")
    public ResponseEntity<?> getStep1Form(@RequestParam(name = "username") String username){
        System.out.println(username);

        ResidenceDetails residenceDetails = universityAdmissionService.getResidenceDetailsByUsername(username);
        ParentDetails parentDetails = universityAdmissionService.getParentDetailsByUsername(username);
        ContactPersonDetails contactPersonDetails = universityAdmissionService.getContactPersonDetailsByUsername(username);

        return ResponseEntity.ok(new Step1FormResponse(
                residenceDetails.getPermanentAddress(),
                residenceDetails.getAdministrativeDistrict(),
                residenceDetails.getFixedTelephone(),
                residenceDetails.getResidenceStartLivingDate(),
                residenceDetails.getRace(),
                residenceDetails.getReligion(),
                residenceDetails.getCitizenByDescent(),
                residenceDetails.getContactAddress(),
                residenceDetails.getPostalCode(),

                parentDetails.getFatherFullname(),
                parentDetails.getMotherFullname(),
                parentDetails.getGuardianFullname(),

                contactPersonDetails.getContactPersonType(),
                contactPersonDetails.getContactPersonAddress(),
                contactPersonDetails.getContactPersonFixedTelephone(),
                contactPersonDetails.getContactPersonMobile()
        ));
    }

    @PostMapping("/step1Form")
    public ResponseEntity<?> step1FormCheckAndSubmit(@Valid @RequestBody Step1FormRequest step1FormRequest){
        String result = universityAdmissionService.saveStep1Form(step1FormRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }

    // STEP 2
    @GetMapping("/step2Form")
    public ResponseEntity<?> getStep2Form(@RequestParam(name = "username") String username){
        System.out.println(username);

        OLDetails olDetails = universityAdmissionService.getOLDetailsByUsername(username);
        ALDetails alDetails = universityAdmissionService.getALDetailsByUsername(username);

        return ResponseEntity.ok(new Step2FormResponse(
                olDetails.getOLYear(),
                olDetails.getOLIndex(),
                olDetails.getOLNameUsed(),
                olDetails.getEnglishResult(),
                olDetails.getMathematicsResult(),
                olDetails.getScienceResult(),

                alDetails.getAlYear(),
                alDetails.getAlIndex(),
                alDetails.getAlNameUsed(),
                alDetails.getAlSubject1(),
                alDetails.getAlSubject2(),
                alDetails.getAlSubject3(),
                alDetails.getAlMedium()
        ));
    }

    @PostMapping("/step2Form")
    public ResponseEntity<?> step2FormCheckAndSubmit(@Valid @RequestBody Step2FormRequest step2FormRequest){
        System.out.println("FROM" + step2FormRequest.toString());

        String result = universityAdmissionService.saveStep2Form(step2FormRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }



    // STEP 3
    @GetMapping("/step3Form")
    public ResponseEntity<?> getStep3Form(@RequestParam(name = "username") String username){
        System.out.println(username);

        SchoolDetails schoolDetails = universityAdmissionService.getSchoolDetailsByUsername(username);
        List<AdditionalSchoolDetails> additionalSchoolDetails = universityAdmissionService.getAdditionalSchoolDetailsByUsername(username);
        OtherDetails otherDetails = universityAdmissionService.getOtherDetailsByUsername(username);

        List<AdditionalSchoolResponse> additionalSchools = new ArrayList<>();

        if(additionalSchoolDetails != null){
            additionalSchoolDetails.forEach(item -> {
                additionalSchools.add(new AdditionalSchoolResponse(
                        item.getAdditionalSchoolName(),
                        item.getAdditionalSchoolDistrict(),
                        item.getAdditionalSchoolFrom(),
                        item.getAdditionalSchoolTo()
                ));
            });
        }

        return ResponseEntity.ok(new Step3FormResponse(
                otherDetails.getCandidateType(),

                schoolDetails.getName(),
                schoolDetails.getAddress(),
                schoolDetails.getAdministrativeDistrict(),
                schoolDetails.getTelephone(),
                schoolDetails.getDateOfAdmission(),

                additionalSchools,

                otherDetails.getAlreadyRegisteredAsInternalStudent(),
                otherDetails.getAlreadyReceivedForeignScholarships()
        ));
    }

    @PostMapping("/step3Form")
    public ResponseEntity<?> step3FormCheckAndSubmit(@RequestBody Step3FormRequest step3FormRequest){
        System.out.println(step3FormRequest.toString());

        String result = universityAdmissionService.saveStep3Form(step3FormRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }

    // STEP 4
    @GetMapping("/step4Form")
    public ResponseEntity<?> getStep4Form(@RequestParam(name = "username") String username){
        System.out.println(username);

        List<OrderOfPreference> orderOfPreferences = universityAdmissionService.getOrderOfPreferencesByUsername(username);

        List<UnicodeRecord> unicodeRecords = new ArrayList<>();

        if(orderOfPreferences != null){
            orderOfPreferences.forEach(item -> {
                UnicodeRecord unicodeRecord = new UnicodeRecord(
                        item.getUnicode(),
                        item.getCourseName(),
                        item.getCourseName()
                );

                unicodeRecords.add(unicodeRecord);
            });
        }

        System.out.println("step 4 form called");

        return ResponseEntity.ok(new Step4FormResponse(unicodeRecords));
    }

    @PostMapping("/step4Form")
    public ResponseEntity<?> step4FormCheckAndSubmit(@RequestBody Step4FormRequest step4FormRequest){
        System.out.println(step4FormRequest.toString());

        String result = universityAdmissionService.saveStep4Form(step4FormRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }
}
