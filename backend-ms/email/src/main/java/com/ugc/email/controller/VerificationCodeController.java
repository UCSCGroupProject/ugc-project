package com.ugc.email.controller;

import com.ugc.email.payload.request.EmailRequest;
import com.ugc.email.payload.request.VerificationCodeRequest;
import com.ugc.email.service.EmailService;
import com.ugc.email.service.VerificationCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/email/verificationCode")
public class VerificationCodeController {
    @Autowired
    VerificationCodeService verificationCodeService;

    @Autowired
    EmailService emailService;

    @PostMapping("/sendCode")
    public void sendOTP(@RequestBody VerificationCodeRequest verificationCodeRequest){
        int generatedCode = verificationCodeService.generateAndStoreCode(verificationCodeRequest.getEmail());

//        EmailRequest emailRequest = new EmailRequest(verificationCodeRequest.getEmail(), String.valueOf(generatedCode), "", "");

        verificationCodeService.generateAndSendVerificationEmail(verificationCodeRequest.getEmail(), generatedCode);
    }

    @PostMapping("/validateCode")
    public boolean validateOTP(@RequestBody VerificationCodeRequest verificationCodeRequest){
        return verificationCodeService.validateCodeAndUpdateTable(verificationCodeRequest.getEmail(), verificationCodeRequest.getEnteredCode());
    }
}
