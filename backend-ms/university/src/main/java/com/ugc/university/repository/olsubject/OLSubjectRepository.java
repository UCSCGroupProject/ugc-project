package com.ugc.university.repository.olsubject;

import com.ugc.university.model.olsubject.Olsubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OLSubjectRepository extends JpaRepository<Olsubject, Integer> {
    Olsubject findOlsubjectByName(String name);
}
