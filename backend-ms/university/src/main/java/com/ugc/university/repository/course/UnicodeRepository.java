package com.ugc.university.repository.course;

import com.ugc.university.model.course.Unicode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UnicodeRepository extends JpaRepository<Unicode, Integer> {

}
