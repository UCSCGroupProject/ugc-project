package com.ugc.school.repository;

import com.ugc.school.model.Keypair;
import com.ugc.school.model.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface KeypairRepository extends JpaRepository<Keypair, Long> {
//    @Query("SELECT * FROM SchoolDetails WHERE sch_id = :id")
//    void get(@Param("email") String email, @Param("password") String password);
    Keypair getKeypairBySchool(School school);
}
