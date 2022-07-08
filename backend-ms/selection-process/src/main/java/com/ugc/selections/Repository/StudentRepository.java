package com.ugc.selections.Repository;

import com.ugc.selections.Student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

//username: admin , password: adminugc

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
