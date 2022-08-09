package com.ugc.school.repository;

import com.ugc.school.model.SchoolDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolDetailsRepository extends JpaRepository<SchoolDetails, Long> {
    SchoolDetails findByPhone(String phone);

    Boolean existsByPhone(String phone);
}
