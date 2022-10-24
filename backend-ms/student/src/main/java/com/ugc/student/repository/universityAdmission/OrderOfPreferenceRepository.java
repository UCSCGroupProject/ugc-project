package com.ugc.student.repository.universityAdmission;

import com.ugc.student.model.Student;
import com.ugc.student.model.universityAdmission.OrderOfPreference;
import com.ugc.student.model.universityAdmission.OtherDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderOfPreferenceRepository extends JpaRepository<OrderOfPreference, Long> {
    List<OrderOfPreference> findByStudent(Student student);


}
