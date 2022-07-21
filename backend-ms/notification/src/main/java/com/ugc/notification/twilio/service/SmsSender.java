package com.ugc.notification.twilio.service;

import com.ugc.notification.twilio.request.SmsRequest;

public interface SmsSender {
    void sendSms(SmsRequest smsRequest);
}
