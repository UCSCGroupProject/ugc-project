package com.ugc.notification.twilio.repository;

import com.ugc.notification.twilio.model.OTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface OTPRepository extends JpaRepository<OTP, Long> {
    boolean existsByPhone(String phone);

    OTP findByPhone(String phone);

    void deleteByPhone(String phone);

    @Transactional
    @Modifying
    @Query("UPDATE OTP SET otp = :otp WHERE phone = :phone")
    void updateOtpByPhone(@Param("phone") String phone, @Param("otp") int otp);
}
