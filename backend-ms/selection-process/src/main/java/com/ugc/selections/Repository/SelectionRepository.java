package com.ugc.selections.Repository;

import com.ugc.selections.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SelectionRepository extends JpaRepository<Student, Integer> {
}
