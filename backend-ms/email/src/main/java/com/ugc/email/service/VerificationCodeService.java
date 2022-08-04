package com.ugc.email.service;

import com.ugc.email.model.VerificationCode;
import com.ugc.email.payload.request.EmailRequest;
import com.ugc.email.repository.VerificationCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@Service
public class VerificationCodeService {
    @Autowired
    VerificationCodeRepository verificationCodeRepository;

    @Autowired
    EmailService emailService;

    public int getRandomCode(){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        return otp;
    }

    public int generateAndStoreCode(String email) {
        int genCode = this.getRandomCode();

        if(verificationCodeRepository.existsByEmail(email)){
            // TODO:
            // IF phone number already exists
            // THEN update the otp as a new one
            verificationCodeRepository.updateCodeByEmail(email, genCode);

        } else {
            VerificationCode verificationCodeRecord = new VerificationCode(email, genCode);
            verificationCodeRepository.save(verificationCodeRecord);
        }


        return genCode;
    }

    public void generateAndSendVerificationEmail(String email, int code) {
        EmailRequest emailRequest = new EmailRequest();
        emailRequest.setRecipient(email);
        emailRequest.setSubject("UGC Student account verification");

        String content = "<html>\n" +
                "<head>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, Helvetica, sans-serif;\n" +
                "        }\n" +
                "\n" +
                "        .email-body{\n" +
                "            background-color: #FFF8F6;\n" +
                "            width: 600px;\n" +
                "            margin: 0 auto;\n" +
                "            height: auto;\n" +
                "            text-align: center;\n" +
                "            color: #363636;\n" +
                "        }\n" +
                "\n" +
                "        p {\n" +
                "            font-size: 30px;\n" +
                "            height: 30px;\n" +
                "        }\n" +
                "\n" +
                "        .email-title {\n" +
                "            background-image: linear-gradient(to right, #ffa502, #ffd79f , #f5ffac);\n" +
                "        }\n" +
                "\n" +
                "        .email-title img {\n" +
                "            height: 70px;\n" +
                "            width: 300px;\n" +
                "        }\n" +
                "\n" +
                "        .email-content {\n" +
                "            padding-top: 13px;\n" +
                "            padding-left: 100px;\n" +
                "            padding-right: 100px;\n" +
                "            padding-bottom: 20px;\n" +
                "            font-size: 14px;\n" +
                "            height: 50px;\n" +
                "        }\n" +
                "\n" +
                "        .email-code {\n" +
                "            font-size: 35px;\n" +
                "            font-weight: bold;\n" +
                "            height: auto;\n" +
                "            line-height: 70px;\n" +
                "            vertical-align: middle;\n" +
                "        }\n" +
                "\n" +
                "        .email-footer {\n" +
                "            margin-top: 30px;\n" +
                "            padding-left: 80px;\n" +
                "            padding-right: 80px;\n" +
                "            padding-bottom: 30px;\n" +
                "            font-size: 12px;\n" +
                "            color: gray;\n" +
                "            border-bottom: 8px solid #ffa502;\n" +
                "        }\n" +
                "\n" +
                "        .copyright {\n" +
                "            margin-top: 40px;\n" +
                "            text-align: center;\n" +
                "            font-size: 12px;\n" +
                "            color: gray;\n" +
                "        }\n" +
                "\n" +
                "        .link {\n" +
                "            margin-top: 30px;\n" +
                "            font-size: 15px;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "<div class=\"email-body\">\n" +
                "    <div class=\"email-title\">\n" +
                "        <img src=\"https://drive.google.com/uc?export=view&id=1UeM5TlcZ0zuUbq53nFyfn-RB-kAXc3Ln\" alt=\"\">\n" +
                "    </div>\n" +
                "    <p>Student Account Verification</p>\n" +
                "    <div class=\"email-content\">\n" +
                "        You have successfully created a student account, Please enter the following code at the user verification form and complete the registration.\n" +
                "    </div>\n" +
                "    <div class=\"email-code\">\n" +
                "        <!-- verification code -->\n" +
                code +
                "    </div>\n" +
                "    <div class=\"email-footer\">\n" +
                "        Didn\\'t create student account? It\\'s likely someone just typed in your email address by accident. Feel free to ignore this email.\n" +
                "        <br><br>\n" +
                "        <div class=\"link\">\n" +
                "            Visit Us: <a href=\"www.ugcproject.lk\">www.ugcproject.lk</a>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>\n" +
                "<div class=\"copyright\">\n" +
                "    This email sent by <br>\n" +
                "    UGCProject 2022. All rights reserved.\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>";

        emailRequest.setMsgBody(content);

        String status = emailService.sendSimpleMail(emailRequest);
    }

    @Transactional
    public boolean validateCodeAndUpdateTable(String phone, int enteredCode){
        if(verificationCodeRepository.existsByEmail(phone)){
            // IF phone number already exists means OTP has been already sent
            // THEN validate it
            VerificationCode verificationCodeRecord = verificationCodeRepository.findByEmail(phone);

            if (enteredCode == verificationCodeRecord.getCode()){
                // IF matches then valid
                // And delete from the table
                verificationCodeRepository.deleteByEmail(phone);

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
