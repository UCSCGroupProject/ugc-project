package com.ugc.email.repository;

import com.ugc.email.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {
    boolean existsByEmail(String email);

    VerificationCode findByEmail(String email);

    void deleteByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE VerificationCode SET code = :code WHERE email = :email")
    void updateCodeByEmail(@Param("email") String email, @Param("code") int code);
}
