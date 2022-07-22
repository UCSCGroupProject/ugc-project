package com.ugc.notification.email.service;

import com.ugc.notification.email.payload.request.EmailRequest;

public interface EmailService {
    // Method to send a simple email
    String sendSimpleMail(EmailRequest details);

    // Method to send an email with attachment
    String sendMailWithAttachment(EmailRequest details);
}
