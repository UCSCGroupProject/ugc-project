package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.ContactPersonDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactPersonDetailsRepository extends JpaRepository<ContactPersonDetails, Long> {
    ContactPersonDetails findByStudent(Student student);
}
