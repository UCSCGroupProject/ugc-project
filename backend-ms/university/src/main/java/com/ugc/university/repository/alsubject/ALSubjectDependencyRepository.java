package com.ugc.university.repository.alsubject;

import com.ugc.university.model.alsubject.ALSubjectDependency;
import com.ugc.university.model.course.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ALSubjectDependencyRepository extends JpaRepository<ALSubjectDependency, Integer> {
    List<ALSubjectDependency> findALSubjectDependenciesByCourse(Course course);
}
