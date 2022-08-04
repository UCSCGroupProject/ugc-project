package com.ugc.notification.twilio.controller;

import com.ugc.notification.twilio.service.TwilioService;
import com.ugc.notification.twilio.payload.request.SmsRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/notification/sms")
public class TwilioController {
    @Autowired
    TwilioService twilioService;

    @PostMapping
    public void sendSms(@Valid @RequestBody SmsRequest smsRequest){
        twilioService.sendSms(smsRequest);
    }
}
