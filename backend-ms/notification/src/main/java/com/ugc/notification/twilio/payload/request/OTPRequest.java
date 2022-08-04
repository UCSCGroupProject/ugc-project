package com.ugc.notification.twilio.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class OTPRequest {
    private String phone;
    private int enteredOtp;
}
