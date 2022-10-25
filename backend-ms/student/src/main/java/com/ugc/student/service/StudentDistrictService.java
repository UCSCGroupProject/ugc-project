package com.ugc.student.service;

import com.ugc.student.payload.response.selection.DistrictRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentDistrictService {

    public DistrictRequest getStudentDistricts() {
        Map<String, List<String>> districtList = new HashMap<>();
        List<String> colombo = new ArrayList<>();
        colombo.add("1945682131");
        colombo.add("1945682135");
        colombo.add("1945682243");
        List<String> gampaha = new ArrayList<>();
        gampaha.add("1945682143");
        gampaha.add("1945682247");
        gampaha.add("1923812227");
        List<String> kalutara = new ArrayList<>();
        kalutara.add("1945682147");
        kalutara.add("1923812131");
        kalutara.add("1923812223");
        List<String> matale = new ArrayList<>();
        matale.add("1923812135");
        matale.add("1923812235");
        List<String> kandy = new ArrayList<>();
        kandy.add("1923812231");
        kandy.add("1923812139");
        kandy.add("1945682151");
        List<String> nuwaraeliya = new ArrayList<>();
        nuwaraeliya.add("1945682155");
        nuwaraeliya.add("1923812143");
        nuwaraeliya.add("1923812239");
        List<String> galle = new ArrayList<>();
        galle.add("1923812243");
        galle.add("1923812147");
        galle.add("1945682159");
        List<String> matara = new ArrayList<>();
        matara.add("1945682163");
        matara.add("1923812151");
        List<String> hambantota = new ArrayList<>();
        hambantota.add("1923812247");
        hambantota.add("1923812155");
        hambantota.add("1945682167");
        List<String> jaffna = new ArrayList<>();
        jaffna.add("1945682171");
        jaffna.add("1923812159");
        List<String> kilinochchi = new ArrayList<>();
        kilinochchi.add("1923812163");
        kilinochchi.add("1945682175");
        List<String> mannar = new ArrayList<>();
        mannar.add("1945682179");
        mannar.add("1923812167");
        List<String> mullaitivu = new ArrayList<>();
        mullaitivu.add("1923812171");
        mullaitivu.add("1945682183");
        List<String> vavuniya = new ArrayList<>();
        vavuniya.add("1945682187");
        vavuniya.add("1923812175");
        vavuniya.add("1945682195");
        List<String> trincomalee = new ArrayList<>();
        trincomalee.add("1923812179");
        trincomalee.add("1945682199");
        trincomalee.add("1945682191");
        List<String> batticaloa = new ArrayList<>();
        batticaloa.add("1945682203");
        batticaloa.add("1923812183");
        List<String> ampara = new ArrayList<>();
        ampara.add("1923812187");
        ampara.add("1945682207");
        List<String> puttalam = new ArrayList<>();
        puttalam.add("1945682211");
        puttalam.add("1923812191");
        List<String> kurunegala = new ArrayList<>();
        kurunegala.add("1923812195");
        kurunegala.add("1945682215");
        List<String> anuradhapura = new ArrayList<>();
        anuradhapura.add("1945682219");
        anuradhapura.add("1923812199");
        List<String> polonnaruwa = new ArrayList<>();
        polonnaruwa.add("1923812203");
        polonnaruwa.add("1945682223");
        List<String> badulla = new ArrayList<>();
        badulla.add("1945682227");
        badulla.add("1923812207");
        List<String> monaragala = new ArrayList<>();
        monaragala.add("1923812211");
        monaragala.add("1945682231");
        List<String> kegalle = new ArrayList<>();
        kegalle.add("1945682235");
        kegalle.add("1923812215");
        List<String> ratnapura = new ArrayList<>();
        ratnapura.add("1923812219");
        ratnapura.add("1945682239");
        ratnapura.add("1945682139");
        districtList.put("Comlombo", colombo);
        districtList.put("Gampaha", gampaha);
        districtList.put("kalutara", kalutara);
        districtList.put("Matale", matale);
        districtList.put("Kandy", kandy);
        districtList.put("Nuwara Eliya", nuwaraeliya);
        districtList.put("Galle", galle );
        districtList.put("Matara", matara);
        districtList.put("Hambantota", hambantota);
        districtList.put("Jaffna", jaffna);
        districtList.put("Kilinochchi", kilinochchi);
        districtList.put("Mannar", mannar);
        districtList.put("Mullaitivu", mullaitivu);
        districtList.put("Vavuniya", vavuniya);
        districtList.put("Trincolamlee", trincomalee);
        districtList.put("Batticaloa", batticaloa);
        districtList.put("Ampara", ampara);
        districtList.put("Puttalam", puttalam);
        districtList.put("Kurunegala", kurunegala);
        districtList.put("Anuradhapura", anuradhapura);
        districtList.put("Polonnaruwa", polonnaruwa);
        districtList.put("Badulla", badulla);
        districtList.put("Monaragala", monaragala);
        districtList.put("Kegalle", kegalle);
        districtList.put("Ratnapura", ratnapura);

        DistrictRequest districtRequest = new DistrictRequest(districtList);
        return districtRequest;
    }
}
