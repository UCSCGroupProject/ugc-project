package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.OLDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OLDetailsRepository extends JpaRepository<OLDetails, Long> {
    OLDetails findByStudent(Student student);
}
