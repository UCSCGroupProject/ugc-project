package com.ugc.selections.Repository;

import com.ugc.selections.Entity.AppliedStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//username: admin , password: adminugc

@Repository
public interface AppliedStudentRepository extends JpaRepository<AppliedStudent, Long> {

}
