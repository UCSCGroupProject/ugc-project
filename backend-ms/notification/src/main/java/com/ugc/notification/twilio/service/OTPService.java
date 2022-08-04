package com.ugc.notification.twilio.service;

import com.sun.xml.bind.v2.TODO;
import com.ugc.notification.twilio.model.OTP;
import com.ugc.notification.twilio.repository.OTPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@Service
public class OTPService {
    @Autowired
    OTPRepository otpRepository;

    public int getRandomOtp(){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        return otp;
    }

    public int generateAndStoreOTP(String phone) {
        int genOtp = this.getRandomOtp();

        if(otpRepository.existsByPhone(phone)){
            // TODO:
            // IF phone number already exists
            // THEN update the otp as a new one
            otpRepository.updateOtpByPhone(phone, genOtp);

        } else {
            OTP otpRecord = new OTP(phone, genOtp);
            otpRepository.save(otpRecord);
        }


        return genOtp;
    }

    @Transactional
    public boolean validateOTPAndUpdateTable(String phone, int enteredOtp){
        if(otpRepository.existsByPhone(phone)){
            // IF phone number already exists means OTP has been already sent
            // THEN validate it
            OTP otpRecord = otpRepository.findByPhone(phone);

            if (enteredOtp == otpRecord.getOtp()){
                // IF matches then valid
                // And delete from the table
                otpRepository.deleteByPhone(phone);

                return true;
            } else {
                // NOT matches
                return false;
            }
        } else {
            // Add new OTP record
            System.out.println("Phone number not found");

            return false;
        }
    }
}
