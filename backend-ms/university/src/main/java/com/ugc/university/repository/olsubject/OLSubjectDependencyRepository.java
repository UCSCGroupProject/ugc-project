package com.ugc.university.repository.olsubject;

import com.ugc.university.model.course.Course;
import com.ugc.university.model.olsubject.OLSubjectDependency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OLSubjectDependencyRepository extends JpaRepository<OLSubjectDependency, Integer> {
    List<OLSubjectDependency> findOLSubjectDependenciesByCourse(Course course);
}
