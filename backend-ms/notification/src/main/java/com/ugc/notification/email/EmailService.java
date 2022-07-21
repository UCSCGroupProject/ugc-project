package com.ugc.notification.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(EmailRequest emailRequest){
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("ucscgroupproject@gmail.com");
        message.setTo("dhanushkasandakelum711@gmail.com");

        String mailSubject = emailRequest.getFullname() + " has sent a message";
        String mailContent = "Sender name: " + emailRequest.getFullname() + "\n";
        mailContent += "Sender email: " + emailRequest.getEmail() + "\n";
        mailContent += "Subject: " + emailRequest.getSubject() + "\n";
        mailContent += "Content: " + emailRequest.getContent() + "\n";

        message.setSubject(mailSubject);
        message.setText(mailContent);

        mailSender.send(message);

        System.out.println("Message sent");
    }
}
