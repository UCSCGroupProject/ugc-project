package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.ALPassedRequest;
import com.ugc.selections.Payload.Request.ApplicantRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SelectionService {
    public List<String> getEligible(ApplicantRequest applicants, ALPassedRequest alResultRequest) {

        //Get the intersection of the two lists
        List<String> eligibleIndexList = applicants.getIndexNumbers()
                .stream().distinct()
                .filter(alResultRequest.getIndexNumbers()::contains)
                .collect(Collectors.toList());

        return eligibleIndexList;
    }
}
