package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.ResidenceDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenceDetailsRepository extends JpaRepository<ResidenceDetails, Long> {
    ResidenceDetails findByStudent(Student student);
}
