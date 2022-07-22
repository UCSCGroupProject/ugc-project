package com.ugc.student.service;

import com.ugc.student.payload.model.NICAndExamDetails;
import com.ugc.student.payload.model.Role;
import com.ugc.student.payload.model.StudentDetails;
import com.ugc.student.payload.model.enums.E_Role;
import com.ugc.student.repository.NICAndExamDetailsRepository;
import com.ugc.student.repository.RoleRepository;
import com.ugc.student.repository.StudentDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Random;

@Service
public class StudentService {
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    NICAndExamDetailsRepository nicAndExamDetailsRepository;

    @Autowired
    StudentDetailsRepository studentDetailsRepository;

    public void initRoles() {
        Role studentRole = new Role();
        studentRole.setName(E_Role.ROLE_STUDENT);

        roleRepository.save(studentRole);
    }

    // For nic and exam details check validations
    public boolean isNICAlreadyExists(String nic){ return nicAndExamDetailsRepository.existsByNic(nic);}

    public boolean isIndexNoAlreadyExists(String indexNo){return nicAndExamDetailsRepository.existsByIndexNo(indexNo);}

    public void saveNicAndExamDetails(String nic, Date nicDateOfIssue, String indexNo, String usedIDType, String usedIDNo, Date usedIDDateOfIssue, String usedIDCopy){
        NICAndExamDetails nicAndExamDetails = new NICAndExamDetails(nic, nicDateOfIssue, indexNo, usedIDType, usedIDNo, usedIDDateOfIssue, usedIDCopy);

        nicAndExamDetailsRepository.save(nicAndExamDetails);
    }


    // For student details validation
    public boolean isPhoneAlreadyExists(String phone){return studentDetailsRepository.existsByPhone(phone);}

    public void saveStudentDetails(String title, String nameWithInitials, String fullName, Date dob, String pob, String civilStatus, String gender, String phone){
        StudentDetails studentDetails = new StudentDetails(title, nameWithInitials, fullName, dob, pob, civilStatus,  gender, phone );

        studentDetailsRepository.save(studentDetails);
    }

    public int generateOTP(){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        return otp;
    }
}
