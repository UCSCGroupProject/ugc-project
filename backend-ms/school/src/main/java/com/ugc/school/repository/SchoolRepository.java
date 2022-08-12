package com.ugc.school.repository;

import com.ugc.school.model.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {
    School findByUsername(String username);

    Optional<School> findByEmail(String email);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE School SET password = :password WHERE email = :email")
    void updatePasswordByEmail(@Param("email") String email, @Param("password") String password);
}
