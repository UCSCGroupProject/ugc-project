package com.ugc.staff.Repository.OLevel;

import com.ugc.staff.Model.OLevel.OLSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OLSubjectRepository extends JpaRepository<OLSubject, Integer> {
    OLSubject getByName(String name);
}
