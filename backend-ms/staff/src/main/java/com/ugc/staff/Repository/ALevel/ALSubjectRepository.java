package com.ugc.staff.Repository.ALevel;

import com.ugc.staff.Model.ALevel.ALSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ALSubjectRepository extends JpaRepository<ALSubject, Integer> {
    ALSubject getByName(String name);
}
