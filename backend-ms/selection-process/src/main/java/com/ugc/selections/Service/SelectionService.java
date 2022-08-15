package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.ALPassedRequest;
import com.ugc.selections.Payload.Request.ApplicantRequest;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SelectionService {
    public Map<String, String> getEligible(ApplicantRequest applicants, ALPassedRequest alResultRequest) {

        //Get the intersection of the two lists

        // Followed : https://stackoverflow.com/questions/59551041/intersecting-list-with-keys-of-map

        Map<String,String> eligibleIndexListWithStreams = applicants
                .getIndexNumbersWithStreams().entrySet()
                .stream().filter(e -> alResultRequest.getIndexNumbers().contains(e))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        return eligibleIndexListWithStreams;
    }
}
