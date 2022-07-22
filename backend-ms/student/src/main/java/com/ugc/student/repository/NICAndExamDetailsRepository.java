package com.ugc.student.repository;

import com.ugc.student.payload.model.NICAndExamDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NICAndExamDetailsRepository extends JpaRepository<NICAndExamDetails, Long> {
    Boolean existsByNic(String nic);

    Boolean existsByIndexNo(String indexNo);
}
