package com.ugc.school.service.defaultSchool;

import com.ugc.school.model.defaultschool.District;
import com.ugc.school.repository.defaultSchool.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DistrictService {
    @Autowired
    private DistrictRepository districtRepository;

    public void initDistricts() {
        districtRepository.save(new District("Kandy"));
        districtRepository.save(new District("Matale"));
        districtRepository.save(new District("Nuwara eliya"));
        districtRepository.save(new District("Anuradhapura"));
        districtRepository.save(new District("Polonnaruwa"));
        districtRepository.save(new District("Jaffna"));
        districtRepository.save(new District("Kilinochchi"));
        districtRepository.save(new District("Mannar"));
        districtRepository.save(new District("Vavuniya"));
        districtRepository.save(new District("Mullaitivu"));
        districtRepository.save(new District("Ampara"));
        districtRepository.save(new District("Batticaloa"));
        districtRepository.save(new District("Trincomalee"));
        districtRepository.save(new District("Kurunegala"));
        districtRepository.save(new District("Puttalam"));
        districtRepository.save(new District("Galle"));
        districtRepository.save(new District("Hanbantota"));
        districtRepository.save(new District("Matara"));
        districtRepository.save(new District("Badulla"));
        districtRepository.save(new District("Moneragala"));
        districtRepository.save(new District("Kegalle"));
        districtRepository.save(new District("Ratnapura"));
        districtRepository.save(new District("Colombo"));
        districtRepository.save(new District("Gampaha"));
        districtRepository.save(new District("Kalutara"));
    }
}
