package com.ugc.school.repository.defaultSchool;

import com.ugc.school.model.defaultschool.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> {
    District findByName(String name);
}
