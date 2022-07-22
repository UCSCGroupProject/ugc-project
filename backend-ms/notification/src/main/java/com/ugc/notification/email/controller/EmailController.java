package com.ugc.notification.email.controller;

import com.ugc.notification.email.payload.request.EmailRequest;
import com.ugc.notification.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notification/email")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/sendVerifyAccountEmail")
    public String sendVerifyAccountEmail(@RequestBody EmailRequest details){
        EmailRequest emailRequest = new EmailRequest();
        emailRequest.setRecipient(details.getRecipient());
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
                details.getMsgBody() +
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

        return status;
    }

    @PostMapping("/sendMail")
    public String sendMail(@RequestBody EmailRequest details){
        String status = emailService.sendSimpleMail(details);

        return status;
    }

    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment(@RequestBody EmailRequest details){
        String status = emailService.sendMailWithAttachment(details);

        return status;
    }







}
