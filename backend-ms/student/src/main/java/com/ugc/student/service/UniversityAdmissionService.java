package com.ugc.student.service;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.*;
import com.ugc.student.payload.request.universityAdmission.*;
import com.ugc.student.payload.response.universityAdmission.UnicodeRecord;
import com.ugc.student.repository.StudentRepository;
import com.ugc.student.repository.universityAdmission.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversityAdmissionService {
    @Autowired
    StudentRepository studentRepository;

    // STEP 1 Related Repos
    @Autowired
    ResidenceDetailsRepository residenceDetailsRepository;

    @Autowired
    ParentDetailsRepository parentDetailsRepository;

    @Autowired
    ContactPersonDetailsRepository contactPersonDetailsRepository;

    // STEP 2 Related Repos
    @Autowired
    OLDetailsRepository olDetailsRepository;

    @Autowired
    ALDetailsRepository alDetailsRepository;

    // STEP 3 Related Repos
    @Autowired
    SchoolDetailsRepository schoolDetailsRepository;

    @Autowired
    AdditionalSchoolDetailsRepository additionalSchoolDetailsRepository;

    @Autowired
    OtherDetailsRepository otherDetailsRepository;

    // STEP 4 Related Repos
    @Autowired
    OrderOfPreferenceRepository orderOfPreferenceRepository;



    // STEP 1 Related
    public ResidenceDetails getResidenceDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        ResidenceDetails residenceDetails = residenceDetailsRepository.findByStudent(student);

        return residenceDetails;
    }

    public ParentDetails getParentDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        ParentDetails parentDetails = parentDetailsRepository.findByStudent(student);

        return parentDetails;
    }

    public ContactPersonDetails getContactPersonDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        ContactPersonDetails contactPersonDetails = contactPersonDetailsRepository.findByStudent(student);

        return contactPersonDetails;
    }

    public String saveStep1Form(Step1FormRequest step1FormRequest) {
        Student student = studentRepository.findByUsername(step1FormRequest.getUsername());

        if(student == null){
            return "User not exists";
        }

        residenceDetailsRepository.save(new ResidenceDetails(
                step1FormRequest.getPermanentAddress(),
                step1FormRequest.getAdministrativeDistrict(),
                step1FormRequest.getFixedTelephone(),
                step1FormRequest.getResidenceStartLivingDate(),
                step1FormRequest.getRace(),
                step1FormRequest.getReligion(),
                step1FormRequest.getCitizenByDescent(),
                step1FormRequest.getContactAddress(),
                step1FormRequest.getPostalCode(),
                student
        ));

        parentDetailsRepository.save(new ParentDetails(
                step1FormRequest.getFatherFullname(),
                step1FormRequest.getMotherFullname(),
                step1FormRequest.getGuardianFullname(),
                student
        ));

        contactPersonDetailsRepository.save(new ContactPersonDetails(
                step1FormRequest.getContactPersonType(),
                step1FormRequest.getContactPersonAddress(),
                step1FormRequest.getContactPersonFixedTelephone(),
                step1FormRequest.getContactPersonMobile(),
                student
        ));

        return "Form saved successfully";
    }


    // STEP 2 Related
    public OLDetails getOLDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        OLDetails olDetails = olDetailsRepository.findByStudent(student);

        return olDetails;
    }

    public ALDetails getALDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        ALDetails alDetails = alDetailsRepository.findByStudent(student);

        return alDetails;
    }

    public String saveStep2Form(Step2FormRequest step2FormRequest){
        Student student = studentRepository.findByUsername(step2FormRequest.getUsername());

        if(student == null){
            return "User not exists";
        }

        olDetailsRepository.save(new OLDetails(
                step2FormRequest.getOlYear(),
                step2FormRequest.getOlIndex(),
                step2FormRequest.getOlNameUsed(),
                step2FormRequest.getEnglishResult(),
                step2FormRequest.getMathematicsResult(),
                step2FormRequest.getScienceResult(),

                student
        ));

        alDetailsRepository.save(new ALDetails(
                step2FormRequest.getAlYear(),
                step2FormRequest.getAlIndex(),
                step2FormRequest.getAlNameUsed(),
                step2FormRequest.getAlSubject1(),
                step2FormRequest.getAlSubject2(),
                step2FormRequest.getAlSubject3(),
                step2FormRequest.getAlMedium(),
                student
        ));

        return "Form saved successfully";
    }


    // STEP 3 Related
    public SchoolDetails getSchoolDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        SchoolDetails schoolDetails = schoolDetailsRepository.findByStudent(student);

        return schoolDetails;
    }

    public List<AdditionalSchoolDetails> getAdditionalSchoolDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        List<AdditionalSchoolDetails> additionalSchoolDetails = additionalSchoolDetailsRepository.findByStudent(student);

        return additionalSchoolDetails;
    }

    public OtherDetails getOtherDetailsByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        OtherDetails otherDetails = otherDetailsRepository.findByStudent(student);

        return otherDetails;
    }

    public String saveStep3Form(Step3FormRequest step3FormRequest){
        Student student = studentRepository.findByUsername(step3FormRequest.getUsername());

        if(student == null){
            return "User not exists";
        }

        schoolDetailsRepository.save(new SchoolDetails(
                step3FormRequest.getSchoolName(),
                step3FormRequest.getSchoolAddress(),
                step3FormRequest.getSchoolAdministrativeDistrict(),
                step3FormRequest.getSchoolTelephone(),
                step3FormRequest.getSchoolDateOfAdmission(),
                student
        ));

        List<AdditionalSchoolRequest> additionalSchools = step3FormRequest.getAdditionalSchools();

        if(additionalSchools != null){
            additionalSchools.forEach(additionalSchool -> {
                additionalSchoolDetailsRepository.save( new AdditionalSchoolDetails(
                        additionalSchool.getAdditionalSchoolName(),
                        additionalSchool.getAdditionalSchoolDistrict(),
                        additionalSchool.getAdditionalSchoolFrom(),
                        additionalSchool.getAdditionalSchoolTo(),
                        student
                ));
            });
        }

        otherDetailsRepository.save(new OtherDetails(
                step3FormRequest.getCandidateType(),
                step3FormRequest.getAlreadyRegisteredAsInternalStudent(),
                step3FormRequest.getAlreadyReceivedForeignScholarships(),
                student
        ));

        return "Form saved successfully";
    }


    // STEP 4 Related
    public List<OrderOfPreference> getOrderOfPreferencesByUsername(String username){
        Student student = studentRepository.findByUsername(username);

        List<OrderOfPreference> orderOfPreferences = orderOfPreferenceRepository.findByStudent(student);

        return orderOfPreferences;
    }

    public String saveStep4Form(Step4FormRequest step4FormRequest) {
        Student student = studentRepository.findByUsername(step4FormRequest.getUsername());

        if(student == null){
            return "User not exists";
        }

        List<OrderOfPreference> orderOfPreferences = orderOfPreferenceRepository.findByStudent(student);

        // Delete data if exists
        if(orderOfPreferences != null){
            orderOfPreferences.forEach(item -> {
                orderOfPreferenceRepository.delete(item);
            });
        }

        List<UnicodeRecord> unicodeRecords = step4FormRequest.getUnicodeRecords();

        unicodeRecords.forEach(item -> {
            orderOfPreferenceRepository.save(new OrderOfPreference(
                    item.getUnicode(),
                    item.getCourseName(),
                    item.getUniversityName(),
                    student
            ));
        });

        return "Form saved successfully";
    }
}
