package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.ParentDetails;
import com.ugc.student.model.universityAdmission.SchoolDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolDetailsRepository extends JpaRepository<SchoolDetails, Long> {
    SchoolDetails findByStudent(Student student);
}
