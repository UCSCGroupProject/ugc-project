package com.ugc.notification.twilio.service;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import com.ugc.notification.twilio.config.TwilioConfiguration;
import com.ugc.notification.twilio.request.SmsRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service("twilio")
public class TwilioSmsSender implements SmsSender {
    private static final Logger LOGGER = LoggerFactory.getLogger(TwilioSmsSender.class);

    private final TwilioConfiguration twilioConfiguration;

    @Autowired
    public TwilioSmsSender(TwilioConfiguration twilioConfiguration){
        this.twilioConfiguration =twilioConfiguration;
    }

    @Override
    public void sendSms(SmsRequest smsRequest){
        if(isPhoneNumberValid(smsRequest.getPhoneNumber())){
            PhoneNumber to = new PhoneNumber(smsRequest.getPhoneNumber());
            PhoneNumber from = new PhoneNumber(twilioConfiguration.getTrailNumber());
            String message = smsRequest.getMessage();
            MessageCreator creator = Message.creator(to, from, message);
            creator.create();
            LOGGER.info("Send sms {}" + smsRequest);
        } else {
            throw new IllegalArgumentException("Phone number ["+ smsRequest.getPhoneNumber()+"] is not a valid number");
        }
    }

    private boolean isPhoneNumberValid(@RequestBody String phoneNumber) {
        // TODO: Implement validations
        return true;
    }
}
