package com.ugc.university.repository.course;

import com.ugc.university.model.course.Stream;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamRepository extends JpaRepository<Stream, Integer> {
}
