package com.ugc.university.service;

import com.ugc.university.model.University;
import com.ugc.university.model.course.Unicode;
import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.universityDetails.UniDetailsResponse;
import com.ugc.university.payload.response.universityDetails.UniProfileResponse;
import com.ugc.university.payload.response.universityDetails.supports.UniProfileCourseDetail;
import com.ugc.university.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UniversityDetailsService {
    @Autowired
    public UniversityRepository universityRepository;

    public List<UniDetailsResponse> getAllUniversityList(){
        List<UniDetailsResponse> uniDetailsResponseList = new ArrayList<>();

        List<University> universityList = universityRepository.findAll();

        universityList.forEach(item -> {
            UniDetailsResponse uniDetailsResponse = new UniDetailsResponse(
                    item.getUsername(),
                    item.getUniversityDetails().getName()
            );

            uniDetailsResponseList.add(uniDetailsResponse);
        });

        return uniDetailsResponseList;
    }

    public ResponseEntity<?> getUniversityProfile(String username){
        University university = universityRepository.findByUsername(username);

        List<Unicode> unicodeList =  university.getUnicodes();
        List<UniProfileCourseDetail> uniProfileCourseDetailList = new ArrayList<>();

        unicodeList.forEach(item -> {
            uniProfileCourseDetailList.add(
                    new UniProfileCourseDetail(
                            item.getCourse().getName(),
                            item.getCourse().getStream().getStreamName(),
                            item.getUnicodeValue()
                    )
            );
        });

        if(university != null){
            UniProfileResponse uniProfileResponse = new UniProfileResponse(
                    university.getUsername(),
                    university.getUniversityDetails().getName(),
                    university.getEmail(),
                    university.getUniversityDetails().getAddress(),
                    university.getUniversityDetails().getIslandRank(),
                    university.getUniversityDetails().getWorldRank(),
                    university.getUniversityDetails().getPhone(),
                    uniProfileCourseDetailList
            );

            return ResponseEntity.ok(new PayloadResponse(uniProfileResponse, "Welcome to "+university.getUniversityDetails().getName()+" profile", ResType.OK));
        } else {
            return ResponseEntity.ok(new PayloadResponse(null, "University not found", ResType.BAD));
        }
//        return ResponseEntity.ok(new PayloadResponse(null, "University not found", ResType.BAD));
    }
}
