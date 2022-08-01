package com.ugc.university.repository;

import com.ugc.university.model.UniversityDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniversityDetailsRepository extends JpaRepository<UniversityDetails, Long> {
    Boolean existsByPhone(String phone);
}
