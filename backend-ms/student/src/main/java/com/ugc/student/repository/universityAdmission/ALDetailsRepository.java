package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.ALDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ALDetailsRepository extends JpaRepository<ALDetails, Long> {
    ALDetails findByStudent(Student student);
}
