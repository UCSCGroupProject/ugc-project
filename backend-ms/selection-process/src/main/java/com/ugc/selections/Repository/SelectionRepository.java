package com.ugc.selections.Repository;

import com.ugc.selections.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface SelectionRepository extends JpaRepository<Student, Integer> {
    Student findByIndexNumber(String indexNumber);
    Integer  deleteByIndexNumber(String indexNumber);
}
