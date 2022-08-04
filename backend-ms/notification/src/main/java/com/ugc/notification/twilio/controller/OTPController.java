package com.ugc.notification.twilio.controller;

import com.ugc.notification.twilio.payload.request.OTPRequest;
import com.ugc.notification.twilio.payload.request.SmsRequest;
import com.ugc.notification.twilio.service.OTPService;
import com.ugc.notification.twilio.service.TwilioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/notification/otp")
public class OTPController {
    @Autowired
    OTPService otpService;

    @Autowired
    TwilioService twilioService;

    @PostMapping("/sendOTP")
    public void sendOTP(@RequestBody OTPRequest otpRequest){
        int generatedOtp = otpService.generateAndStoreOTP(otpRequest.getPhone());

        SmsRequest smsRequest = new SmsRequest(otpRequest.getPhone(), "Your OTP is "+ generatedOtp);

        twilioService.sendSms(smsRequest);
    }

    @PostMapping("/validateOTP")
    public boolean validateOTP(@RequestBody OTPRequest otpRequest){
        return otpService.validateOTPAndUpdateTable(otpRequest.getPhone(), otpRequest.getEnteredOtp());
    }
}
