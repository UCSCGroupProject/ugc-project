package com.ugc.school.service;

import com.ugc.school.model.Keypair;
import com.ugc.school.model.School;
import com.ugc.school.payload.request.studentValidation.ReqBlockData;
import com.ugc.school.payload.request.studentValidation.Transaction;
import com.ugc.school.repository.KeypairRepository;
import com.ugc.school.repository.SchoolDetailsRepository;
import com.ugc.school.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentValidationService {
    @Autowired
    SchoolRepository schoolRepository;
    @Autowired
    KeypairRepository keypairRepository;

    public ReqBlockData validateAndPublishStudentList(ReqBlockData reqBlockData){
        School school = schoolRepository.findByUsername(reqBlockData.getCreatorName());

        if(school != null){
            // If exists
            Keypair keypair = keypairRepository.getKeypairBySchool(school);

            ReqBlockData block = new ReqBlockData(
                    reqBlockData.getTransactions(),
                    school.getUsername(),
                    school.getEmail(),
                    keypair.getPublicKey(),
                    keypair.getPrivateKey()
            );

            return  block;
        } else {
            return null;
        }
    }
}
