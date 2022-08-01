package com.ugc.university.service;

import com.ugc.university.model.Role;
import com.ugc.university.model.UniversityDetails;
import com.ugc.university.model.enums.E_Role;
import com.ugc.university.repository.RoleRepository;
import com.ugc.university.repository.UniversityDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Random;

@Service
public class UniversityService {
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UniversityDetailsRepository universityDetailsRepository;

    public void initRoles() {
        Role studentRole = new Role();
        studentRole.setName(E_Role.ROLE_UNIVERSITY);

        roleRepository.save(studentRole);
    }

    // For nic and exam details check validations
//    public boolean isNICAlreadyExists(String nic){ return nicAndExamDetailsRepository.existsByNic(nic);}

//    public boolean isIndexNoAlreadyExists(String indexNo){return nicAndExamDetailsRepository.existsByIndexNo(indexNo);}
//
//    public void saveNicAndExamDetails(String nic, Date nicDateOfIssue, String indexNo, String usedIDType, String usedIDNo, Date usedIDDateOfIssue, String usedIDCopy){
//        NICAndExamDetails nicAndExamDetails = new NICAndExamDetails(nic, nicDateOfIssue, indexNo, usedIDType, usedIDNo, usedIDDateOfIssue, usedIDCopy);
//
//        nicAndExamDetailsRepository.save(nicAndExamDetails);
//    }


    // For university details validation
    public boolean isPhoneAlreadyExists(String phone){return universityDetailsRepository.existsByPhone(phone);}

    public void saveUniversityDetails(String name, String address, String islandRank, String worldRank, String phone){
        UniversityDetails universityDetails = new UniversityDetails(name, address, islandRank, worldRank, phone );

        universityDetailsRepository.save(universityDetails);
    }

    public int generateOTP(){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        return otp;
    }

    public int generateCode(){
        Random random = new Random();
        int code = 100000 + random.nextInt(900000);

        return code;
    }
}
