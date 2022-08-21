package com.ugc.student.service;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.*;
import com.ugc.student.payload.request.universityAdmission.AdditionalSchoolRequest;
import com.ugc.student.payload.request.universityAdmission.Step1FormRequest;
import com.ugc.student.payload.request.universityAdmission.Step3FormRequest;
import com.ugc.student.payload.request.universityAdmission.Step4FormRequest;
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

        List<String> unicodes = step4FormRequest.getUnicodes();

        if(unicodes != null){
            unicodes.forEach(item -> {
                orderOfPreferenceRepository.save(new OrderOfPreference(
                        item,
                        student
                ));
            });
        }

        return "Form saved successfully";
    }
}
