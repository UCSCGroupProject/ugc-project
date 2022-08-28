package com.ugc.university.repository;

import com.ugc.university.model.UniversityDetails;
import com.ugc.university.model.course.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UniversityDetailsRepository extends JpaRepository<UniversityDetails, Long> {
    Boolean existsByPhone(String phone);

    UniversityDetails findByName(String name);
}
