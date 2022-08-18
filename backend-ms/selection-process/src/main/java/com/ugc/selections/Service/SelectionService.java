package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.ALPassedRequest;
import com.ugc.selections.Payload.Request.ApplicantRequest;
import com.ugc.selections.Payload.Request.ZScoreRequest;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SelectionService {
    public List<String> getEligible(ApplicantRequest applicants, ALPassedRequest alResultRequest) {

        //Get the intersection of the two lists
        List<String> eligibleIndexList = applicants
                .getIndexNumbers()
                .stream().filter(e -> alResultRequest.getIndexNumbers().contains(e))
                .collect(Collectors.toList());
        return eligibleIndexList;
    }

    public List<String> sortZScore(List<String> listOfStudents, ZScoreRequest zScoreRequest) {

    }

    public void select(List<String> listOfStudents) {

    }



}
