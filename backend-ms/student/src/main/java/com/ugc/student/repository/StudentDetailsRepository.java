package com.ugc.student.repository;

import com.ugc.student.model.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Long> {
    Boolean existsByPhone(String phone);
}
