package com.ugc.selections.Repository;

import com.ugc.selections.Student.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//username: admin , password: adminugc

@Repository
public interface AppliedStudentRepository extends JpaRepository<Student, Long> {

}
