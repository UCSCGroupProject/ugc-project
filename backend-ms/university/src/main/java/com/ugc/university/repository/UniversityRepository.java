package com.ugc.university.repository;

import com.ugc.university.model.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UniversityRepository extends JpaRepository<University, Long> {
    University findByUsername(String username);

    Optional<University> findByEmail(String email);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE University SET password = :password WHERE email = :email")
    void updatePasswordByEmail(@Param("email") String email, @Param("password") String password);

}
