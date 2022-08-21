package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.AdditionalSchoolDetails;
import com.ugc.student.model.universityAdmission.ParentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdditionalSchoolDetailsRepository extends JpaRepository<AdditionalSchoolDetails, Long> {
    List<AdditionalSchoolDetails> findByStudent(Student student);
}
