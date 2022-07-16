package com.ugc.staff.Repository;

import com.ugc.staff.Model.ALPassedStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ALPassedStudentRepository extends JpaRepository<ALPassedStudent, Long>  {
}
