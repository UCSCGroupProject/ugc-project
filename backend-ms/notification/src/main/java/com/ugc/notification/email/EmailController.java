package com.ugc.notification.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notification/email")
public class EmailController {
    @Autowired
    EmailService emailService;

    @GetMapping
    public String checkStatus() {
        return "works";
    }

    @PostMapping
    public void sendEmail(@RequestBody EmailRequest emailRequest){
        emailService.sendEmail(emailRequest);
    }
}
