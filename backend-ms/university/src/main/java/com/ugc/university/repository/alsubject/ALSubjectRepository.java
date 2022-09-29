package com.ugc.university.repository.alsubject;

import com.ugc.university.model.alsubject.Alsubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ALSubjectRepository extends JpaRepository<Alsubject, Integer> {
    Alsubject findAlsubjectByName(String name);
}
