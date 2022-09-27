package com.ugc.school.service.defaultSchool;

import com.ugc.school.model.defaultschool.DefaultSchool;
import com.ugc.school.model.defaultschool.District;
import com.ugc.school.payload.request.defaultSchool.Req_DefaultSchool;
import com.ugc.school.payload.response.PayloadResponse;
import com.ugc.school.payload.response.ResType;
import com.ugc.school.payload.response.defaultSchool.Res_DefaultSchool;
import com.ugc.school.repository.defaultSchool.DefaultSchoolRepository;
import com.ugc.school.repository.defaultSchool.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DefaultSchoolService {
    @Autowired
    private DefaultSchoolRepository defaultSchoolRepository;
    @Autowired
    private DistrictRepository districtRepository;

    public void initSchools() {
        District colombo = districtRepository.findByName("Colombo");

        defaultSchoolRepository.save(new DefaultSchool("Royal College", colombo));
        defaultSchoolRepository.save(new DefaultSchool("Ananda College", colombo));
        defaultSchoolRepository.save(new DefaultSchool("Nalanda College", colombo));
        defaultSchoolRepository.save(new DefaultSchool("Thurstan College", colombo));
    }

    public ResponseEntity<?> createSchool(Req_DefaultSchool req_defaultSchool) {
        District district = districtRepository.findByName(req_defaultSchool.getDistrictName());

        if(district != null) {
            defaultSchoolRepository.save(new DefaultSchool(
                    req_defaultSchool.getSchoolName(),
                    district
            ));

            return ResponseEntity.ok(new PayloadResponse(null, "School added successfully", ResType.OK));
        } else {
            return ResponseEntity.ok(new PayloadResponse(null, "School adding failed", ResType.BAD));
        }
    }

    public ResponseEntity<?> getSchool(Integer schoolId) {
        DefaultSchool defaultSchool = defaultSchoolRepository.findDefaultSchoolById(schoolId);

        if(defaultSchool != null) {
            Res_DefaultSchool res_defaultSchool = new Res_DefaultSchool(
                    defaultSchool.getId(),
                    defaultSchool.getName(),
                    defaultSchool.getDistrict().getName()
            );

            return ResponseEntity.ok(new PayloadResponse(res_defaultSchool, "School found", ResType.OK));
        }else {
            return ResponseEntity.ok(new PayloadResponse(null, "School not found", ResType.BAD));
        }
    }

    public ResponseEntity<?> getAllSchools() {
        List<Res_DefaultSchool> res_defaultSchools = new ArrayList<>();

        List<DefaultSchool> defaultSchools = defaultSchoolRepository.findAll();

        if(defaultSchools != null) {
            defaultSchools.forEach(item -> {
                Res_DefaultSchool res_defaultSchool = new Res_DefaultSchool(
                        item.getId(),
                        item.getName(),
                        item.getDistrict().getName()
                );

                res_defaultSchools.add(res_defaultSchool);
            });

            return ResponseEntity.ok(new PayloadResponse(res_defaultSchools, "Schools found", ResType.OK));
        }
        else {
            return ResponseEntity.ok(new PayloadResponse(null, "Schools not found", ResType.BAD));
        }
    }

    public ResponseEntity<?> updateSchool(Req_DefaultSchool req_defaultSchool, Integer schoolId) {
        DefaultSchool defaultSchool = defaultSchoolRepository.findDefaultSchoolById(schoolId);

        if (defaultSchool != null) {
            defaultSchool.setName(req_defaultSchool.getSchoolName());

            District district = districtRepository.findByName(req_defaultSchool.districtName);
            defaultSchool.setDistrict(district);

            defaultSchoolRepository.save(defaultSchool);

            return ResponseEntity.ok(new PayloadResponse(null, "School updated", ResType.OK));
        } else {
            return ResponseEntity.ok(new PayloadResponse(null, "School not found", ResType.BAD));
        }
    }

    public ResponseEntity<?> deleteSchool(Integer schoolId) {
        defaultSchoolRepository.deleteById(schoolId);

        return ResponseEntity.ok(new PayloadResponse(null, "School deleted", ResType.OK));
    }
}
