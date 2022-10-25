package com.ugc.student.service;

import com.ugc.student.model.universityAdmission.OrderOfPreference;
import com.ugc.student.payload.response.selection.ApplicantRequest;
import com.ugc.student.payload.response.selection.ApplicationRequest;
import com.ugc.student.repository.universityAdmission.OrderOfPreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentApplicantService {

    @Autowired
    private final OrderOfPreferenceRepository orderOfPreferenceRepository;

    public StudentApplicantService(OrderOfPreferenceRepository orderOfPreferenceRepository) {
        this.orderOfPreferenceRepository = orderOfPreferenceRepository;
    }

    public ApplicantRequest getApplicants() {
        List<String> indexApplicants= new ArrayList<>();
        indexApplicants.add("1945682131");
        indexApplicants.add("1945682135");
        indexApplicants.add("1945682139");
        indexApplicants.add("1945682143");
        indexApplicants.add("1945682147");
        indexApplicants.add("1945682151");
        indexApplicants.add("1945682155");
        indexApplicants.add("1945682159");
        indexApplicants.add("1945682163");
        indexApplicants.add("1945682167");
        indexApplicants.add("1945682171");
        indexApplicants.add("1945682175");
        indexApplicants.add("1945682179");
        indexApplicants.add("1945682183");
        indexApplicants.add("1945682187");
        indexApplicants.add("1945682191");
        indexApplicants.add("1945682195");
        indexApplicants.add("1945682199");
        indexApplicants.add("1945682203");
        indexApplicants.add("1945682207");
        indexApplicants.add("1945682211");
        indexApplicants.add("1945682215");
        indexApplicants.add("1945682219");
        indexApplicants.add("1945682223");
        indexApplicants.add("1945682227");
        indexApplicants.add("1945682231");
        indexApplicants.add("1945682235");
        indexApplicants.add("1945682239");
        indexApplicants.add("1945682243");
        indexApplicants.add("1945682247");
        indexApplicants.add("1923812131");
        indexApplicants.add("1923812135");
        indexApplicants.add("1923812139");
        indexApplicants.add("1923812143");
        indexApplicants.add("1923812147");
        indexApplicants.add("1923812151");
        indexApplicants.add("1923812155");
        indexApplicants.add("1923812159");
        indexApplicants.add("1923812163");
        indexApplicants.add("1923812167");
        indexApplicants.add("1923812171");
        indexApplicants.add("1923812175");
        indexApplicants.add("1923812179");
        indexApplicants.add("1923812183");
        indexApplicants.add("1923812187");
        indexApplicants.add("1923812191");
        indexApplicants.add("1923812195");
        indexApplicants.add("1923812199");
        indexApplicants.add("1923812203");
        indexApplicants.add("1923812207");
        indexApplicants.add("1923812211");
        indexApplicants.add("1923812215");
        indexApplicants.add("1923812219");
        indexApplicants.add("1923812223");
        indexApplicants.add("1923812227");
        indexApplicants.add("1923812231");
        indexApplicants.add("1923812235");
        indexApplicants.add("1923812239");
        indexApplicants.add("1923812243");
        indexApplicants.add("1923812247");
        ApplicantRequest applicants = new ApplicantRequest(indexApplicants);
        return applicants;
    }

    public ApplicationRequest getApplications() {
        List<OrderOfPreference> orderOfPreferences = new ArrayList<>();
        Map<String, List<String>> applications = new HashMap<>();
        List<String> pref = new ArrayList<>();
        pref.add("019A");
        pref.add("019B");
        pref.add("019C");
        pref.add("019D");
        pref.add("019E");
        pref.add("019F");
        pref.add("019H");
        pref.add("019J");
        pref.add("019K");
        pref.add("024G");
        applications.put("1945682131", pref);

        List<String> pref1 = new ArrayList<>();
        pref1.add("018C");
        pref1.add("018D");
        pref1.add("016A");
        pref1.add("018H");
        pref1.add("018J");
        pref1.add("022W");
        pref1.add("022R");
        pref1.add("028C");
        pref1.add("016A");
        pref1.add("016B");
        applications.put("1945682135", pref1);

        List<String> pref2 = new ArrayList<>();
        pref2.add("001A");
        pref2.add("001B");
        pref2.add("001C");
        pref2.add("001D");
        pref2.add("001F");
        pref2.add("001G");
        pref2.add("001K");
        pref2.add("001L");
        pref2.add("001M");
        pref2.add("002B");
        applications.put("1945682139", pref2);

        List<String> pref3 = new ArrayList<>();
        pref3.add("008G");
        pref3.add("008C");
        pref3.add("008B");
        pref3.add("008F");
        pref3.add("008E");
        pref3.add("012T");
        pref3.add("012D");
        pref3.add("012F");
        pref3.add("013A");
        pref3.add("013B");
        applications.put("1945682143", pref3);

        List<String> pref4 = new ArrayList<>();
        pref4.add("009G");
        pref4.add("010G");
        pref4.add("011G");
        pref4.add("026G");
        pref4.add("102A");
        pref4.add("102C");
        pref4.add("102D");
        pref4.add("102F");
        pref4.add("102K");
        pref4.add("102L");
        applications.put("1945682147", pref4);

        List<String> pref5 = new ArrayList<>();
        pref5.add("103A");
        pref5.add("103C");
        pref5.add("103E");
        pref5.add("103F");
        pref5.add("103H");
        pref5.add("103J");
        pref5.add("103K");
        pref5.add("103L");
        pref5.add("103M");
        pref5.add("103U");
        applications.put("1945682151", pref5);

        List<String> pref6 = new ArrayList<>();
        pref6.add("106F");
        pref6.add("105C");
        pref6.add("105D");
        pref6.add("110D");
        pref6.add("111B");
        pref6.add("112B");
        pref6.add("115D");
        pref6.add("116C");
        pref6.add("117G");
        pref6.add("119D");
        applications.put("1945682155", pref6);

        List<String> pref7 = new ArrayList<>();
        pref7.add("019A");
        pref7.add("019B");
        pref7.add("019C");
        pref7.add("019D");
        pref7.add("019E");
        pref7.add("019F");
        pref7.add("019H");
        pref7.add("019J");
        pref7.add("019K");
        pref7.add("020S");
        applications.put("1945682159", pref7);

        List<String> pref8 = new ArrayList<>();
        pref8.add("016A");
        pref8.add("016B");
        pref8.add("016C");
        pref8.add("016D");
        pref8.add("016E");
        pref8.add("016F");
        pref8.add("016H");
        pref8.add("016J");
        pref8.add("016K");
        pref8.add("016L");
        applications.put("1945682163", pref8);

        List<String> pref9 = new ArrayList<>();
        pref9.add("102A");
        pref9.add("102C");
        pref9.add("102D");
        pref9.add("102E");
        pref9.add("102F");
        pref9.add("102K");
        pref9.add("102L");
        pref9.add("102M");
        pref9.add("102U");
        pref9.add("095F");
        applications.put("1945682167", pref9);

        List<String> pref10 = new ArrayList<>();
        pref10.add("103A");
        pref10.add("103C");
        pref10.add("103E");
        pref10.add("103F");
        pref10.add("103H");
        pref10.add("103J");
        pref10.add("103K");
        pref10.add("103L");
        pref10.add("103M");
        pref10.add("103U");
        applications.put("1945682171", pref10);

        List<String> pref11 = new ArrayList<>();
        pref11.add("008C");
        pref11.add("008G");
        pref11.add("008B");
        pref11.add("008F");
        pref11.add("008E");
        pref11.add("012T");
        pref11.add("012D");
        pref11.add("012F");
        pref11.add("013A");
        pref11.add("013B");
        applications.put("1945682175", pref11);

        List<String> pref12 = new ArrayList<>();
        pref12.add("019B");
        pref12.add("019A");
        pref12.add("019C");
        pref12.add("019D");
        pref12.add("019E");
        pref12.add("019F");
        pref12.add("019H");
        pref12.add("019J");
        pref12.add("019K");
        pref12.add("024G");
        applications.put("1945682179", pref12);

        List<String> pref13 = new ArrayList<>();
        pref13.add("018D");
        pref13.add("018C");
        pref13.add("016A");
        pref13.add("018H");
        pref13.add("018J");
        pref13.add("022W");
        pref13.add("022R");
        pref13.add("028C");
        pref13.add("016A");
        pref13.add("016B");
        applications.put("1945682183", pref13);

        List<String> pref14 = new ArrayList<>();
        pref14.add("001A");
        pref14.add("001B");
        pref14.add("001C");
        pref14.add("001D");
        pref14.add("001F");
        pref14.add("001G");
        pref14.add("001K");
        pref14.add("001L");
        pref14.add("001M");
        pref14.add("002B");
        applications.put("1945682187", pref14);

        List<String> pref15 = new ArrayList<>();
        pref15.add("008G");
        pref15.add("008C");
        pref15.add("008B");
        pref15.add("008F");
        pref15.add("008E");
        pref15.add("012T");
        pref15.add("012D");
        pref15.add("012F");
        pref15.add("013A");
        pref15.add("013B");
        applications.put("1945682191", pref15);

        List<String> pref16 = new ArrayList<>();
        pref16.add("009G");
        pref16.add("010G");
        pref16.add("011G");
        pref16.add("026G");
        pref16.add("102A");
        pref16.add("102C");
        pref16.add("102D");
        pref16.add("102F");
        pref16.add("102K");
        pref16.add("102L");
        applications.put("1945682195", pref16);

        List<String> pref17 = new ArrayList<>();
        pref17.add("103A");
        pref17.add("103C");
        pref17.add("103E");
        pref17.add("103F");
        pref17.add("103H");
        pref17.add("103J");
        pref17.add("103K");
        pref17.add("103L");
        pref17.add("103M");
        pref17.add("103U");
        applications.put("1945682199", pref17);

        List<String> pref18 = new ArrayList<>();
        pref18.add("019D");
        pref18.add("019A");
        pref18.add("019B");
        pref18.add("019C");
        pref18.add("019E");
        pref18.add("019F");
        pref18.add("019H");
        pref18.add("019J");
        pref18.add("019K");
        pref18.add("024G");
        applications.put("1945682203", pref18);

        List<String> pref19 = new ArrayList<>();
        pref19.add("018H");
        pref19.add("018C");
        pref19.add("018D");
        pref19.add("016A");
        pref19.add("018J");
        pref19.add("022W");
        pref19.add("022R");
        pref19.add("028C");
        pref19.add("016A");
        pref19.add("016B");
        applications.put("1945682207", pref19);

        List<String> pref20 = new ArrayList<>();
        pref20.add("001G");
        pref20.add("001A");
        pref20.add("001B");
        pref20.add("001C");
        pref20.add("001D");
        pref20.add("001F");
        pref20.add("001K");
        pref20.add("001L");
        pref20.add("001M");
        pref20.add("002B");
        applications.put("1945682211", pref20);

        List<String> pref21 = new ArrayList<>();
        pref21.add("012T");
        pref21.add("008G");
        pref21.add("008C");
        pref21.add("008B");
        pref21.add("008F");
        pref21.add("008E");
        pref21.add("012D");
        pref21.add("012F");
        pref21.add("013A");
        pref21.add("013B");
        applications.put("1945682215", pref21);

        List<String> pref22 = new ArrayList<>();
        pref22.add("011G");
        pref22.add("009G");
        pref22.add("010G");
        pref22.add("026G");
        pref22.add("102A");
        pref22.add("102C");
        pref22.add("102D");
        pref22.add("102F");
        pref22.add("102K");
        pref22.add("102L");
        applications.put("1945682219", pref22);

        List<String> pref23 = new ArrayList<>();
        pref23.add("103U");
        pref23.add("103A");
        pref23.add("103C");
        pref23.add("103E");
        pref23.add("103F");
        pref23.add("103H");
        pref23.add("103J");
        pref23.add("103K");
        pref23.add("103L");
        pref23.add("103M");
        applications.put("1945682223", pref23);

        List<String> pref24 = new ArrayList<>();
        pref24.add("019F");
        pref24.add("019A");
        pref24.add("019B");
        pref24.add("019C");
        pref24.add("019D");
        pref24.add("019E");
        pref24.add("019H");
        pref24.add("019J");
        pref24.add("019K");
        pref24.add("024G");
        applications.put("1945682227", pref24);

        List<String> pref25 = new ArrayList<>();
        pref25.add("018H");
        pref25.add("018C");
        pref25.add("018D");
        pref25.add("016A");
        pref25.add("018J");
        pref25.add("022W");
        pref25.add("022R");
        pref25.add("028C");
        pref25.add("016A");
        pref25.add("016B");
        applications.put("1945682231", pref25);

        List<String> pref26 = new ArrayList<>();
        pref26.add("001F");
        pref26.add("001A");
        pref26.add("001B");
        pref26.add("001C");
        pref26.add("001D");
        pref26.add("001G");
        pref26.add("001K");
        pref26.add("001L");
        pref26.add("001M");
        pref26.add("002B");
        applications.put("1945682235", pref26);

        List<String> pref27 = new ArrayList<>();
        pref27.add("013B");
        pref27.add("008G");
        pref27.add("008C");
        pref27.add("008B");
        pref27.add("008F");
        pref27.add("008E");
        pref27.add("012T");
        pref27.add("012D");
        pref27.add("012F");
        pref27.add("013A");
        applications.put("1945682239", pref27);

        List<String> pref28 = new ArrayList<>();
        pref28.add("102D");
        pref28.add("009G");
        pref28.add("010G");
        pref28.add("011G");
        pref28.add("026G");
        pref28.add("102A");
        pref28.add("102C");
        pref28.add("102F");
        pref28.add("102K");
        pref28.add("102L");
        applications.put("1945682243", pref28);

        List<String> pref29 = new ArrayList<>();
        pref29.add("103K");
        pref29.add("103A");
        pref29.add("103C");
        pref29.add("103E");
        pref29.add("103F");
        pref29.add("103H");
        pref29.add("103J");
        pref29.add("103L");
        pref29.add("103M");
        pref29.add("103U");
        applications.put("1945682247", pref29);

        List<String> pref30 = new ArrayList<>();
        pref30.add("019E");
        pref30.add("019A");
        pref30.add("019B");
        pref30.add("019C");
        pref30.add("019D");
        pref30.add("019F");
        pref30.add("019H");
        pref30.add("019J");
        pref30.add("019K");
        pref30.add("024G");
        applications.put("1923812131", pref30);

        List<String> pref31 = new ArrayList<>();
        pref31.add("022W");
        pref31.add("018C");
        pref31.add("018D");
        pref31.add("016A");
        pref31.add("018H");
        pref31.add("018J");
        pref31.add("022R");
        pref31.add("028C");
        pref31.add("016A");
        pref31.add("016B");
        applications.put("1923812135", pref31);

        List<String> pref32 = new ArrayList<>();
        pref32.add("001C");
        pref32.add("001A");
        pref32.add("001B");
        pref32.add("001D");
        pref32.add("001F");
        pref32.add("001G");
        pref32.add("001K");
        pref32.add("001L");
        pref32.add("001M");
        pref32.add("002B");
        applications.put("1923812139", pref32);

        List<String> pref33 = new ArrayList<>();
        pref33.add("008G");
        pref33.add("008C");
        pref33.add("008B");
        pref33.add("008F");
        pref33.add("008E");
        pref33.add("012T");
        pref33.add("012D");
        pref33.add("012F");
        pref33.add("013A");
        pref33.add("013B");
        applications.put("1923812143", pref33);

        List<String> pref34 = new ArrayList<>();
        pref34.add("010G");
        pref34.add("009G");
        pref34.add("011G");
        pref34.add("026G");
        pref34.add("102A");
        pref34.add("102C");
        pref34.add("102D");
        pref34.add("102F");
        pref34.add("102K");
        pref34.add("102L");
        applications.put("1923812147", pref34);

        List<String> pref35 = new ArrayList<>();
        pref35.add("103C");
        pref35.add("103A");
        pref35.add("103E");
        pref35.add("103F");
        pref35.add("103H");
        pref35.add("103J");
        pref35.add("103K");
        pref35.add("103L");
        pref35.add("103M");
        pref35.add("103U");
        applications.put("1923812151", pref35);

        List<String> pref36 = new ArrayList<>();
        pref36.add("019B");
        pref36.add("019A");
        pref36.add("019C");
        pref36.add("019D");
        pref36.add("019E");
        pref36.add("019F");
        pref36.add("019H");
        pref36.add("019J");
        pref36.add("019K");
        pref36.add("024G");
        applications.put("1923812155", pref36);

        List<String> pref37 = new ArrayList<>();
        pref37.add("016A");
        pref37.add("018C");
        pref37.add("018D");
        pref37.add("018H");
        pref37.add("018J");
        pref37.add("022W");
        pref37.add("022R");
        pref37.add("028C");
        pref37.add("016A");
        pref37.add("016B");
        applications.put("1923812159", pref37);

        List<String> pref38 = new ArrayList<>();
        pref38.add("001C");
        pref38.add("001A");
        pref38.add("001B");
        pref38.add("001D");
        pref38.add("001F");
        pref38.add("001G");
        pref38.add("001K");
        pref38.add("001L");
        pref38.add("001M");
        pref38.add("002B");
        applications.put("1923812163", pref38);

        List<String> pref39 = new ArrayList<>();
        pref39.add("008C");
        pref39.add("008G");
        pref39.add("008B");
        pref39.add("008F");
        pref39.add("008E");
        pref39.add("012T");
        pref39.add("012D");
        pref39.add("012F");
        pref39.add("013A");
        pref39.add("013B");
        applications.put("1923812167", pref39);

        List<String> pref40 = new ArrayList<>();
        pref40.add("010G");
        pref40.add("009G");
        pref40.add("011G");
        pref40.add("026G");
        pref40.add("102A");
        pref40.add("102C");
        pref40.add("102D");
        pref40.add("102F");
        pref40.add("102K");
        pref40.add("102L");
        applications.put("1923812171", pref40);

        List<String> pref41 = new ArrayList<>();
        pref41.add("103C");
        pref41.add("103A");
        pref41.add("103E");
        pref41.add("103F");
        pref41.add("103H");
        pref41.add("103J");
        pref41.add("103K");
        pref41.add("103L");
        pref41.add("103M");
        pref41.add("103U");
        applications.put("1923812175", pref41);

        List<String> pref42 = new ArrayList<>();
        pref42.add("019B");
        pref42.add("019A");
        pref42.add("019C");
        pref42.add("019D");
        pref42.add("019E");
        pref42.add("019F");
        pref42.add("019H");
        pref42.add("019J");
        pref42.add("019K");
        pref42.add("024G");
        applications.put("1923812179", pref42);

        List<String> pref43 = new ArrayList<>();
        pref43.add("018J");
        pref43.add("018C");
        pref43.add("018D");
        pref43.add("016A");
        pref43.add("018H");
        pref43.add("022W");
        pref43.add("022R");
        pref43.add("028C");
        pref43.add("016A");
        pref43.add("016B");
        applications.put("1923812183", pref43);

        List<String> pref44 = new ArrayList<>();
        pref2.add("001D");
        pref2.add("001A");
        pref2.add("001B");
        pref2.add("001C");
        pref2.add("001F");
        pref2.add("001G");
        pref2.add("001K");
        pref2.add("001L");
        pref2.add("001M");
        pref2.add("002B");
        applications.put("1923812187", pref44);

        List<String> pref45 = new ArrayList<>();
        pref45.add("012F");
        pref45.add("008G");
        pref45.add("008C");
        pref45.add("008B");
        pref45.add("008F");
        pref45.add("008E");
        pref45.add("012T");
        pref45.add("012D");
        pref45.add("013A");
        pref45.add("013B");
        applications.put("1923812191", pref45);

        List<String> pref46 = new ArrayList<>();
        pref46.add("102K");
        pref46.add("009G");
        pref46.add("010G");
        pref46.add("011G");
        pref46.add("026G");
        pref46.add("102A");
        pref46.add("102C");
        pref46.add("102D");
        pref46.add("102F");
        pref46.add("102L");
        applications.put("1923812195", pref46);

        List<String> pref47 = new ArrayList<>();
        pref47.add("103E");
        pref47.add("103A");
        pref47.add("103C");
        pref47.add("103F");
        pref47.add("103H");
        pref47.add("103J");
        pref47.add("103K");
        pref47.add("103L");
        pref47.add("103M");
        pref47.add("103U");
        applications.put("1923812199", pref47);

        List<String> pref48 = new ArrayList<>();
        pref48.add("019B");
        pref48.add("019A");
        pref48.add("019C");
        pref48.add("019D");
        pref48.add("019E");
        pref48.add("019F");
        pref48.add("019H");
        pref48.add("019J");
        pref48.add("019K");
        pref48.add("024G");
        applications.put("1923812203", pref48);

        List<String> pref49 = new ArrayList<>();
        pref49.add("018H");
        pref49.add("018C");
        pref49.add("018D");
        pref49.add("016A");
        pref49.add("018J");
        pref49.add("022W");
        pref49.add("022R");
        pref49.add("028C");
        pref49.add("016A");
        pref49.add("016B");
        applications.put("1923812207", pref49);

        List<String> pref50 = new ArrayList<>();
        pref50.add("001B");
        pref50.add("001A");
        pref50.add("001C");
        pref50.add("001D");
        pref50.add("001F");
        pref50.add("001G");
        pref50.add("001K");
        pref50.add("001L");
        pref50.add("001M");
        pref50.add("002B");
        applications.put("1923812211", pref50);

        List<String> pref51 = new ArrayList<>();
        pref51.add("008G");
        pref51.add("008C");
        pref51.add("008B");
        pref51.add("008F");
        pref51.add("008E");
        pref51.add("012T");
        pref51.add("012D");
        pref51.add("012F");
        pref51.add("013A");
        pref51.add("013B");
        applications.put("1923812215", pref51);

        List<String> pref52 = new ArrayList<>();
        pref52.add("010G");
        pref52.add("009G");
        pref52.add("011G");
        pref52.add("026G");
        pref52.add("102A");
        pref52.add("102C");
        pref52.add("102D");
        pref52.add("102F");
        pref52.add("102K");
        pref52.add("102L");
        applications.put("1923812219", pref52);

        List<String> pref53 = new ArrayList<>();
        pref53.add("103F");
        pref53.add("103A");
        pref53.add("103C");
        pref53.add("103E");
        pref53.add("103H");
        pref53.add("103J");
        pref53.add("103K");
        pref53.add("103L");
        pref53.add("103M");
        pref53.add("103U");
        applications.put("1923812223", pref53);

        List<String> pref54 = new ArrayList<>();
        pref54.add("019B");
        pref54.add("019A");
        pref54.add("019C");
        pref54.add("019D");
        pref54.add("019E");
        pref54.add("019F");
        pref54.add("019H");
        pref54.add("019J");
        pref54.add("019K");
        pref54.add("024G");
        applications.put("1923812227", pref54);

        List<String> pref55 = new ArrayList<>();
        pref55.add("018C");
        pref55.add("018D");
        pref55.add("016A");
        pref55.add("018H");
        pref55.add("018J");
        pref55.add("022W");
        pref55.add("022R");
        pref55.add("028C");
        pref55.add("016A");
        pref55.add("016B");
        applications.put("1923812231", pref55);

        List<String> pref56 = new ArrayList<>();
        pref56.add("001D");
        pref56.add("001A");
        pref56.add("001B");
        pref56.add("001C");
        pref56.add("001F");
        pref56.add("001G");
        pref56.add("001K");
        pref56.add("001L");
        pref56.add("001M");
        pref56.add("002B");
        applications.put("1923812235", pref56);

        List<String> pref57 = new ArrayList<>();
        pref57.add("008C");
        pref57.add("008G");
        pref57.add("008B");
        pref57.add("008F");
        pref57.add("008E");
        pref57.add("012T");
        pref57.add("012D");
        pref57.add("012F");
        pref57.add("013A");
        pref57.add("013B");
        applications.put("1923812239", pref57);

        List<String> pref58 = new ArrayList<>();
        pref58.add("010G");
        pref58.add("009G");
        pref58.add("011G");
        pref58.add("026G");
        pref58.add("102A");
        pref58.add("102C");
        pref58.add("102D");
        pref58.add("102F");
        pref58.add("102K");
        pref58.add("102L");
        applications.put("1923812243", pref58);

        List<String> pref59 = new ArrayList<>();
        pref59.add("103C");
        pref59.add("103A");
        pref59.add("103E");
        pref59.add("103F");
        pref59.add("103H");
        pref59.add("103J");
        pref59.add("103K");
        pref59.add("103L");
        pref59.add("103M");
        pref59.add("103U");
        applications.put("1923812247", pref59);

        ApplicationRequest applicationRequest = new ApplicationRequest(applications);

        return applicationRequest;
    }
}
