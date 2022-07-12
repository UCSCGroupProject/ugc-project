package com.ugc.selections.Repository;

import com.ugc.selections.Entity.ALPassedStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ALPassedStudentRepository extends JpaRepository<ALPassedStudent, Long>  {
}
