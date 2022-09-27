package com.ugc.school.repository.defaultSchool;

import com.ugc.school.model.defaultschool.DefaultSchool;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DefaultSchoolRepository extends JpaRepository<DefaultSchool, Integer> {
    DefaultSchool findDefaultSchoolById(Integer id);
}
