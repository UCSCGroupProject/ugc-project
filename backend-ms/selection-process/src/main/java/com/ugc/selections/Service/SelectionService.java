package com.ugc.selections.Service;

import com.ugc.selections.Payload.Request.ALPassedRequest;
import com.ugc.selections.Payload.Request.ApplicantRequest;
import com.ugc.selections.Payload.Request.ZScoreRequest;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.*;
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
        Map<String, Double> eligibleZScores =  zScoreRequest.getZscores()
                .entrySet()
                .stream()
                .filter(map->listOfStudents.contains(map.getKey()))
                .collect(Collectors.toMap(map->map.getKey(), map->map.getValue()));

//        for (String name: eligibleZScores.keySet()) {
//            String key = name.toString();
//            String value = eligibleZScores.get(name).toString();
//            System.out.println(key + " " + value);
//        }

        LinkedHashMap<String, Double> reverseSortedMap = new LinkedHashMap<>();
         eligibleZScores
                .entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .forEachOrdered(x -> reverseSortedMap.put(x.getKey(), x.getValue()));

        return reverseSortedMap.keySet().stream().toList();
    }

    public void meritSelection(List<String> meritStudents) {

    }
}
