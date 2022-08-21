package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.OtherDetails;
import com.ugc.student.model.universityAdmission.ParentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtherDetailsRepository extends JpaRepository<OtherDetails, Long> {
    OtherDetails findByStudent(Student student);
}
