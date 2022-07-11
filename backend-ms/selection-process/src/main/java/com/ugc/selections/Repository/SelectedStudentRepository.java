package com.ugc.selections.Repository;

import com.ugc.selections.Entity.SelectedStudent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SelectedStudentRepository extends JpaRepository<SelectedStudent, Long> {
}
