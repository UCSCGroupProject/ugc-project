package com.ugc.school.repository;

import com.ugc.school.model.Keypair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeypairRepository extends JpaRepository<Keypair, Long> {
}
